import React from 'react';
import PropTypes from 'prop-types';
import { StripeProvider as StripeProviderLib } from 'react-stripe-elements';
import loadScript from 'load-script';

export const StripeLoaderContext = React.createContext({
  isStripeLoaded: false,
  loadStripe() {},
});

class StripeProvider extends React.Component {
  static propTypes = {
    loadOnMount: PropTypes.bool,
  };

  static defaultProps = {
    loadOnMount: false,
  };

  state = {
    loading: false,
    stripe: null,
  };

  apiStripeKey = '';

  async componentDidMount() {
    if (this.props.loadOnMount) {
      this.apiStripeKey = await this.getApiKey(); // call to back-end to get stripe api key
      await this.loadStripe();
    }
  }

  getApiKey = () => new Promise(resolved => resolved('pk_test_akCUPMLB2Ir1MqL6ZFST7czM'));

  loadStripe = async () => {
    if (this.state.loading) {
      return;
    }
    this.setState({ loading: true });
    if (window && window.Stripe) {
      this.setState({
        stripe: window.Stripe(this.apiStripeKey),
      });
      return;
    }
    const stripe = await this.getStripe(this.apiStripeKey);

    this.setState({
      stripe,
      loading: false,
      isStripeLoaded: true,
    });
  };

  getStripe = async token => {
    let stripe = null;
    const stripeKey = token;

    if (stripeKey && window) {
      if (typeof window.Stripe === 'undefined') {
        await this.loadScriptAsync('https://js.stripe.com/v3/');
      }
      stripe = window.Stripe(stripeKey);
    }
    return stripe;
  };

  loadScriptAsync = (url, opts = {}) =>
    new Promise((resolve, reject) => {
      loadScript(url, opts, (err, script) => (err ? reject(err) : resolve(script)));
    });

  render() {
    return (
      <StripeLoaderContext.Provider
        value={{
          loadStripe: this.loadStripe,
          isStripeLoaded: this.state.isStripeLoaded,
          apiStripeKey: this.apiStripeKey,
          stripe: this.state.stripe,
        }}
      >
        <StripeProviderLib stripe={this.state.stripe || null} {...this.props} />
      </StripeLoaderContext.Provider>
    );
  }
}

const { Consumer: StripeConsumer } = StripeLoaderContext;

const withStripeLoader = WrappedComponent => {
  const WithStripeLoader = props => (
    <StripeConsumer>{context => <WrappedComponent {...context} {...props} />}</StripeConsumer>
  );

  WithStripeLoader.getInitialProps = async context => {
    if (WrappedComponent.getInitialProps) {
      const data = await WrappedComponent.getInitialProps(context);
      return data;
    }
    return {};
  };

  return WithStripeLoader;
};

export { withStripeLoader, StripeConsumer };
export default StripeProvider;
