import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class LoadMore extends PureComponent {
  static defaultProps = {
    limit: 10,
    offset: 0,
    isShowButton: true,
    onLoadMore: () => {},
  };

  static propTypes = {
    onLoadMore: PropTypes.func,
    limit: PropTypes.number,
    offset: PropTypes.number,
    isShowButton: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  };

  onClick = () => {
    const { limit, offset, onLoadMore } = this.props;

    onLoadMore({ offset: offset + limit, limit });
  };

  render() {
    const { children, isShowButton } = this.props;

    return (
      <div className="load-more">
        <div className="load-more__content mb-5">{children}</div>
        <div className="load-more__footer text-center">
          {isShowButton && (
            <button type="button" className="btn btn-new btn-success" onClick={this.onClick}>
              Load more
            </button>
          )}
        </div>
      </div>
    );
  }
}
