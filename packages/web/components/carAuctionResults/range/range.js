import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import RangeMenuList from './rangeMenuList';
import colours from './colours';

const customStyles = {
  container: () => ({
    borderRadius: '2px',
    fontSize: '12px',
  }),
  menu: () => ({
    backgroundColor: colours.grayLight,
    padding: '10px',
    borderRadius: '2px',
    position: 'absolute',
    zIndex: '910',
    width: '100%',
    minWidth: '200px',
  }),
  option: (provided, state) => ({
    ...provided,
    margin: '5px 0 0 0',
    backgroundColor: state.isSelected ? colours.green : colours.grayDark,
  }),
  control: (provided, state) => {
    const {
      selectProps: { rangeDefaultValue, rangeValue },
    } = state;
    const rangeIsChanged = JSON.stringify(rangeDefaultValue) !== JSON.stringify(rangeValue);

    return {
      display: 'flex',
      borderBottom: `2px solid ${rangeIsChanged ? colours.green : colours.dark}`,
      backgroundColor: state.menuIsOpen ? colours.green : colours.grayDark,
      borderRadius: '2px',
      margin: 0,
      padding: 0,
    };
  },
  placeholder: () => ({
    position: 'absolute',
    zIndex: '502',
  }),
  clearIndicator: () => ({
    display: 'none',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  input: () => ({}),
};

export default class Range extends PureComponent {
  static defaultProps = {
    isMulti: false,
    isSearchable: false,
    hideSelectedOptions: false,
    closeMenuOnSelect: false,
    backspaceRemovesValue: false,
    onChange: () => {},
    placeholder: '',

    rangeDefaultValue: [0, 0],
    onRangeChange: () => {},
    onRangeAfterChange: () => {},
    rangeValue: [0, 0],
    rangeMin: 0,
    rangeMax: 0,
  };

  static propTypes = {
    isMulti: PropTypes.bool,
    isSearchable: PropTypes.bool,
    hideSelectedOptions: PropTypes.bool,
    closeMenuOnSelect: PropTypes.bool,
    backspaceRemovesValue: PropTypes.bool,
    value: PropTypes.shape.isRequired,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.shape).isRequired,
    placeholder: PropTypes.string,

    rangeDefaultValue: PropTypes.arrayOf(PropTypes.number),
    onRangeChange: PropTypes.func,
    onRangeAfterChange: PropTypes.func,
    rangeValue: PropTypes.arrayOf(PropTypes.number),
    rangeMin: PropTypes.number,
    rangeMax: PropTypes.number,
  };

  render() {
    const {
      isMulti,
      isSearchable,
      hideSelectedOptions,
      closeMenuOnSelect,
      backspaceRemovesValue,
      value,
      onChange,
      options,
      placeholder,

      rangeDefaultValue,
      onRangeChange,
      onRangeAfterChange,
      rangeValue,
      rangeMin,
      rangeMax,
    } = this.props;

    return (
      <Select
        styles={{ ...customStyles }}
        isMulti={isMulti}
        isSearchable={isSearchable}
        hideSelectedOptions={hideSelectedOptions}
        closeMenuOnSelect={closeMenuOnSelect}
        backspaceRemovesValue={backspaceRemovesValue}
        value={value}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        defaultInputValue=""
        className="react-select-container"
        classNamePrefix="react-select"
        components={{ MenuList: RangeMenuList }}
        rangeDefaultValue={rangeDefaultValue}
        onRangeChange={onRangeChange}
        onRangeAfterChange={onRangeAfterChange}
        rangeValue={rangeValue}
        rangeMin={rangeMin}
        rangeMax={rangeMax}
      />
    );
  }
}
