import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListEmpty from 'components/partnerPortal/listEmpty';

const showItemsList = ChildComponent =>
  class extends Component {
    static propTypes = {
      isLoaded: PropTypes.bool,
      items: PropTypes.array,
      listEmptyMessage: PropTypes.string,
    };

    render() {
      const { isLoaded, items, listEmptyMessage } = this.props;

      return Array.isArray(items) && !items.length && isLoaded ? (
        <ListEmpty listEmptyMessage={listEmptyMessage} />
      ) : (
        <ChildComponent {...this.props} />
      );
    }
  };

export default showItemsList;
