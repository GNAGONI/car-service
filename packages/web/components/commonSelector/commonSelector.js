import React, { PureComponent } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { SELECT_THEMES } from './constans';

export default class CommonSelector extends PureComponent {
  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      }),
    ),
    theme: PropTypes.string,
    onSelect: PropTypes.func,
    value: PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
    }),
    placeholder: PropTypes.string,
    onDropFilters: PropTypes.func,
  };

  static defaultProps = {
    options: [],
    theme: 'lite',
    onSelect: () => {},
    value: null,
    placeholder: '',
    onDropFilters: () => {},
  };

  handleSelectChange = value => {
    const { onDropFilters, onSelect } = this.props;

    onDropFilters();
    onSelect(value);
  };

  render() {
    const { options, theme, value, placeholder } = this.props;

    return (
      <Select
        onChange={this.handleSelectChange}
        options={options || []}
        isSearchable={false}
        styles={SELECT_THEMES[theme]}
        placeholder={placeholder}
        value={value}
      />
    );
  }
}
