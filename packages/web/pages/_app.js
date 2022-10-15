import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { Router } from 'server/pages';
import NProgress from 'nprogress';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';

import RootModal from 'containers/rootModalContainer';
import RootToast from 'components/Toast';
import ScrollToTheTopButton from 'components/ScrollToTheTopButton';
import { getCookie } from 'lib/cookie';
import { authenticate } from '@car-service/redux/actions/user';
import configureStore from '../webSpecificRedux/configureStore';

import '../styles/bootstrap.scss';
import '../styles/main.scss';

library.add(faStroopwafel);

// import '../../../../node_modules/nprogress/nprogress.css'

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

/**
 * TODO: Spinner in the PersistGate property
 * loading (null) will be added in the task
 * with default spinner
 *
 */

class carserviceFrontendApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    // authentication for server-side
    if (ctx.isServer && ctx.req.headers.cookie) {
      const token = getCookie('token', ctx.req);

      ctx.store.dispatch(authenticate({ token }));
    }

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  // authentication for client-side
  componentDidMount() {
    const token = getCookie('token');
    this.props.store.dispatch(authenticate({ token }));
  }

  render() {
    const { Component, pageProps, store } = this.props;
    const persistor = persistStore(store);
    return (
      <Container>
        <div className="app-wrapper">
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <RootModal />
              <RootToast />
              <Component {...pageProps} />
              <ScrollToTheTopButton />
            </PersistGate>
          </Provider>
        </div>
      </Container>
    );
  }
}

export default withRedux(configureStore)(withReduxSaga({ async: true })(carserviceFrontendApp));
