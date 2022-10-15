import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class TabNavigation extends PureComponent {
  static defaultProps = {
    items: [],
    activeKey: '',
    onTabClick: () => {},
  };

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        key: PropTypes.string,
      }),
    ),
    activeKey: PropTypes.string,
    onTabClick: PropTypes.func,
  };

  getListItem() {
    const { items, onTabClick, activeKey } = this.props;

    return items.map(({ key, label }) => {
      const itemClass = `${activeKey === key ? 'active' : ''}`;

      return (
        <li className={itemClass} key={key}>
          <a onClick={() => onTabClick(key)}>{label}</a>
        </li>
      );
    });
  }

  render() {
    return <ul className="tabset">{this.getListItem()}</ul>;
  }
}
