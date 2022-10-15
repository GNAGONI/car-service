import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class SubHeader extends PureComponent {
  static defaultProps = {
    text: '',
    title: '',
    icon: '',
    children: null,
  };

  static propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  };

  render() {
    const { icon, title, text, children } = this.props;

    return (
      <div className="main-header-content">
        <div className="icon-holder">
          <img src={icon} width="95" height="97" alt="description" />
        </div>
        <div className="text-holder">
          {children || (
            <>
              <h1>{title}</h1>
              <p>{text}</p>
            </>
          )}
        </div>
      </div>
    );
  }
}
