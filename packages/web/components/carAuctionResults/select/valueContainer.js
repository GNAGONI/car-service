import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { components } from 'react-select';

export default class ValueContainer extends PureComponent {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.shape).isRequired,
    selectProps: PropTypes.shape({
      placeholder: PropTypes.string.isRequired,
      inputValue: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const {
      children,
      selectProps: { placeholder, inputValue },
    } = this.props;

    return (
      <components.ValueContainer {...this.props}>
        {!inputValue && placeholder}
        {children[1]}
      </components.ValueContainer>
    );
  }
}
