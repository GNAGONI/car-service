import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Collapse, Button } from 'react-bootstrap';

export default class extends PureComponent {
  static propTypes = {
    regions: PropTypes.string.isRequired,
    regionsHeader: PropTypes.string.isRequired,
  };

  state = {
    open: false,
  };

  handleViewMoreLocationsCollapse = () => {
    const { open } = this.state;

    this.setState({ open: !open });
  };

  render() {
    const { open } = this.state;
    const { regions, regionsHeader } = this.props;

    return (
      <section className="content section-regions bg-before-lighter">
        {regionsHeader && <div dangerouslySetInnerHTML={{ __html: regionsHeader }} />}
        <Collapse in={open}>
          <div>{regions && <div dangerouslySetInnerHTML={{ __html: regions }} />}</div>
        </Collapse>
        <div className="btn-block text-center">
          <Button onClick={this.handleViewMoreLocationsCollapse} color="primary" className="btn-locations">
            {open ? (
              <div>
                <strong className="less">View less locations</strong>
                <i className="icon-chevron-down" />
              </div>
            ) : (
              <div>
                <strong className="more">View more locations</strong>
                <i className="icon-chevron-down" />
              </div>
            )}
          </Button>
        </div>
      </section>
    );
  }
}
