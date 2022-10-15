import React, { PureComponent } from 'react';
import { CardElement } from 'react-stripe-elements';

export default class extends PureComponent {
  render() {
    return (
      <div>
        Card details
        <CardElement />
      </div>
    );
  }
}
