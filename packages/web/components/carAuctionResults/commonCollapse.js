import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'react-bootstrap';

export default class CommonCollapse extends PureComponent {
  static propTypes = {
    content: PropTypes.string,
    children: PropTypes.any,
    renderAlwaysShowElements: PropTypes.func,
    isShowReadMore: PropTypes.bool,
  };

  static defaultProps = {
    content: '',
    children: null,
    renderAlwaysShowElements: () => null,
    isShowReadMore: true,
  };

  state = {
    open: false,
  };

  handleReadMoreCollapse = () => {
    this.setState(prevState => ({
      open: !prevState.open,
    }));
  };

  render() {
    const { open } = this.state;
    const { content, children, renderAlwaysShowElements, isShowReadMore } = this.props;

    return (
      <section className="content section-info common-collapse">
        {renderAlwaysShowElements()}
        <Collapse in={open}>
          <div className="mb-4">
            {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
            {children && children}
          </div>
        </Collapse>
        <div className="btn-block text-center pt-2">
          {isShowReadMore && (
            <a className={`default read-more ${open ? 'active' : ''}`} onClick={this.handleReadMoreCollapse}>
              {open ? <span className="less">Read less</span> : <span className="more">Read more</span>}
            </a>
          )}
        </div>
      </section>
    );
  }
}
