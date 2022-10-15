import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { components } from 'react-select';
import colours from './colours';

const customMenuStyles = {
  infoBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  clearButton: {
    backgroundColor: colours.grayDark,
    border: 'none',
    borderRadius: '2px',
    color: colours.dark,
    padding: '10px',
  },
  line: {
    borderBottom: `2px solid ${colours.dark}`,
    margin: '10px 0px 20px 0px',
  },
};

export default class MenuList extends PureComponent {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.shape).isRequired,
    clearValue: PropTypes.func.isRequired,
  };

  render() {
    const { children, clearValue } = this.props;
    const selectedNumber = Array.isArray(children) && children.filter(item => item.props.isSelected);

    return (
      <components.MenuList {...this.props}>
        <div style={customMenuStyles.infoBlock}>
          {`${selectedNumber.length || 0} Selected`}
          <button type="button" onClick={clearValue} style={customMenuStyles.clearButton}>
            Clear
          </button>
        </div>
        <div style={customMenuStyles.line} />
        {children}
      </components.MenuList>
    );
  }
}
