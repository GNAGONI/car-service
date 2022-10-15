import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { components } from 'react-select';
import { Range, Handle } from 'rc-slider';
import colours from './colours';

const customMenuStyles = {
  rails: {
    backgroundColor: colours.grayDark,
  },
  handleStyle: {
    backgroundColor: colours.green,
    border: 'none',
    cursor: 'pointer',
  },
  trackStyle: {
    backgroundColor: colours.green,
    border: 'none',
  },
  rangeBlock: {
    margin: '9px',
  },
  infoBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  clearButton: {
    backgroundColor: colours.grayDark,
    border: 'none',
    borderRadius: '2px',
    color: '#19212d',
    padding: '10px',
  },
  line: {
    borderBottom: `2px solid ${colours.dark}`,
    margin: '10px 0px 20px 0px',
  },
  rangeValues: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
};

export default class RangeMenuList extends PureComponent {
  static defaultProps = {
    selectProps: {
      rangeDefaultValue: [0, 0],
      onRangeChange: () => {},
      onRangeAfterChange: () => {},
      rangeValue: [0, 0],
      rangeMin: 0,
      rangeMax: 0,
    },
  };

  static propTypes = {
    rangeDefaultValue: PropTypes.arrayOf(PropTypes.number).isRequired,
    onRangeChange: PropTypes.func.isRequired,
    onRangeAfterChange: PropTypes.func.isRequired,
    rangeValue: PropTypes.arrayOf(PropTypes.number).isRequired,
    rangeMin: PropTypes.number.isRequired,
    rangeMax: PropTypes.number.isRequired,
    selectProps: PropTypes.shape,
  };

  /**
   * Function handle returns customized Handle component.
   *
   * `disabled` property should be set as 'true' because of avoiding blur event
   *
   * @param {Object} props - properties for Handle component
   * @returns {React.Node}
   */
  handle = props => <Handle {...props} disabled />;

  render() {
    const {
      selectProps: { rangeDefaultValue, onRangeChange, onRangeAfterChange, rangeValue, rangeMin, rangeMax },
    } = this.props;

    return (
      <components.MenuList {...this.props}>
        <div style={customMenuStyles.infoBlock}>
          <div>{`${rangeValue[0] || 0} - ${rangeValue[1] || 0}`}</div>
          <div>Selected</div>
        </div>
        <div style={customMenuStyles.line} />
        <div style={customMenuStyles.rangeBlock}>
          <div style={customMenuStyles.rangeValues}>
            <div>{`${rangeMin || 0} m.`}</div>
            <div>{`${rangeMax || 0} m.`}</div>
          </div>
          <Range
            defaultValue={rangeDefaultValue}
            onChange={onRangeChange}
            onBeforeChange={onRangeAfterChange}
            onAfterChange={onRangeAfterChange}
            value={rangeValue}
            min={rangeMin}
            max={rangeMax}
            handle={this.handle}
            trackStyle={[customMenuStyles.trackStyle, customMenuStyles.trackStyle]}
            handleStyle={[customMenuStyles.handleStyle, customMenuStyles.handleStyle]}
            railStyle={customMenuStyles.rails}
          />
        </div>
      </components.MenuList>
    );
  }
}
