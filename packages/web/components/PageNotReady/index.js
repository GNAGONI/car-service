import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Router } from 'server/pages';

// Components
import Page from 'components/page';
import { DefaultHeader } from 'components/Header';
import Footer from 'components/Footer';

// Styles
import './styles.scss';

// Constants
const MESSAGE = 'Page is not ready now.';

class PageNotReady extends PureComponent {
  static propTypes = {
    redirectTo: PropTypes.string,
  };

  static defaultProps = {
    redirectTo: '/',
  };

  componentDidMount() {
    const { redirectTo } = this.props;
    Router.replace(redirectTo);
  }

  render() {
    return (
      <Page title={MESSAGE}>
        <DefaultHeader />
        <main className="page-not-ready">
          <h1>{MESSAGE}</h1>
        </main>
        <Footer />
      </Page>
    );
  }
}

export default PageNotReady;
