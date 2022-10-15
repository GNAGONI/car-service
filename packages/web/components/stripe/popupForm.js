import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import StripeCheckout from 'react-stripe-checkout';

import { StripeConsumer } from 'components/stripeProvider';

export default class extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  };

  onToken = (/* token */) => {
    // handle token: send to back-end
  };

  render() {
    const { children } = this.props;

    return (
      <StripeConsumer>
        {context => (
          <StripeCheckout token={this.onToken} stripeKey={context.apiStripeKey}>
            {children}
          </StripeCheckout>
        )}
      </StripeConsumer>
    );
  }
}
