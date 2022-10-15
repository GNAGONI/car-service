import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class extends PureComponent {
  static propTypes = {
    text: PropTypes.string,
  };

  static defaultProps = {
    text: '',
  };

  render() {
    const { text } = this.props;

    return (
      <div className="info-box">
        <div className="row">
          <div className="col-12 col-lg-9">
            <h2>Customer Description:</h2>
            <p>{text}</p>
          </div>
        </div>
      </div>
    );
  }
}
