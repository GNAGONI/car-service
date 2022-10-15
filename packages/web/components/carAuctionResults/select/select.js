import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import { sortOptions } from 'lib/select';
import MultiValue from './multiValue';
import ValueContainer from './valueContainer';
import MenuList from './menuList';
import Option from './option';
import colours from './colours';

const customStyles = {
  container: () => ({
    borderRadius: '2px',
    fontSize: '12px',
  }),
  menu: () => ({
    backgroundColor: colours.grayLight,
    padding: '10px',
    position: 'absolute',
    zIndex: '902',
    borderRadius: '2px',
    minWidth: '200px',
    width: '100%',
  }),
  option: (provided, state) => ({
    ...provided,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: '5px 0 0 0',
    width: '100%',
    backgroundColor: state.isSelected ? colours.green : colours.grayDark,
    '&:active': {
      backgroundColor: colours.green,
    },
  }),
  control: (provided, state) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: `2px solid ${state.hasValue ? colours.green : colours.dark}`,
    backgroundColor: state.menuIsOpen ? colours.green : colours.grayDark,
    borderRadius: '2px',
    margin: 0,
    padding: 0,
  }),
  valueContainer: (provided, { isActive }) => ({
    ...provided,
    flexWrap: 'nowrap',
    whiteSpace: isActive ? 'wrap' : 'nowrap',
  }),
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
  input: () => ({
    paddingRight: 0,
  }),
};

export default class SelectFilter extends PureComponent {
  static defaultProps = {
    isMulti: true,
    isSearchable: true,
    hideSelectedOptions: false,
    closeMenuOnSelect: false,
    backspaceRemovesValue: false,
    onChange: () => {},
    placeholder: '',
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
    } = this.props;
    const sortedOptions = sortOptions(options);

    return (
      <div>
        <Select
          styles={{ ...customStyles }}
          isMulti={isMulti}
          isSearchable={isSearchable}
          hideSelectedOptions={hideSelectedOptions}
          closeMenuOnSelect={closeMenuOnSelect}
          backspaceRemovesValue={backspaceRemovesValue}
          components={{ MenuList, MultiValue, ValueContainer, Option }}
          maxMenuHeight={500}
          value={value}
          onChange={onChange}
          options={sortedOptions}
          placeholder={placeholder}
          defaultInputValue=""
          className="react-select-container"
          classNamePrefix="react-select"
        />
      </div>
    );
  }
}
