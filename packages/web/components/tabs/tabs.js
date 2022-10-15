import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TabNavigation from './tabSet';

export default class Tabs extends PureComponent {
  static defaultProps = {
    items: [],
    activeKey: '',
    onTabClick: () => {},
    isShowContent: true,
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
    isShowContent: PropTypes.bool,
    children: PropTypes.node.isRequired,
  };

  onTabClick = activeKey => {
    this.props.onTabClick(activeKey);
  };

  render() {
    const { items, children, isShowContent, activeKey } = this.props;

    return (
      <div>
        <TabNavigation items={items} onTabClick={this.onTabClick} activeKey={activeKey} />

        <div className="tab-content">
          <div className={`tab ${isShowContent ? '' : 'tab-hidden'}`}>{children}</div>
        </div>
      </div>
    );
  }
}
