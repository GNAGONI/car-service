import React, { Component } from 'react';
import PropTypes from 'prop-types';

const showItemsList = (ChildComponent, ErrorComponent) =>
  class extends Component {
    static propTypes = {
      errorMessage: PropTypes.string,
    };

    render() {
      const { errorMessage } = this.props;

      return errorMessage ? <ErrorComponent errorMessage={errorMessage} /> : <ChildComponent {...this.props} />;
    }
  };

export default showItemsList;
