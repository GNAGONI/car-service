import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { injectStripe } from 'react-stripe-elements';
import ElementSection from './elementSection';

class CheckoutForm extends PureComponent {
  static propTypes = {
    stripe: PropTypes.shape,
  };

  static defaultProps = {
    stripe: null,
  };

  handleSubmit = e => {
    e.preventDefault();
    const { stripe } = this.props;

    if (stripe) {
      stripe.createToken().then(() => {});
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ElementSection />
        <button type="button">Confirm order</button>
      </form>
    );
  }
}

const InjectedStripeForm = injectStripe(CheckoutForm);

export default InjectedStripeForm;
