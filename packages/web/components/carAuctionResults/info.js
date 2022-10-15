import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'react-bootstrap';

export default class extends PureComponent {
  static defaultProps = {
    content: '',
  };

  static propTypes = {
    content: PropTypes.string,
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
    const { content } = this.props;

    return (
      <section className="content section-info">
        <Collapse in={open}>{(content && <div dangerouslySetInnerHTML={{ __html: content }} />) || <div />}</Collapse>
        <div className="btn-block text-center">
          <a className="default read-more" onClick={this.handleReadMoreCollapse}>
            {open ? <span className="less">Read less</span> : <span className="more">Read more</span>}
          </a>
        </div>
      </section>
    );
  }
}
