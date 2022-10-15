import React, { PureComponent } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Router } from 'server/pages';
import PropTypes from 'prop-types';

import Breadcrumbs from 'components/Breadcrumbs';
import Subnav from 'modules/car-auctions/common/carAuctionsSubnav';
import CommonSelector from 'containers/browseByMake/browseMakeCommonSelectorContainer';

export default class BrowseByMakeHeader extends PureComponent {
  static propTypes = {
    fields: PropTypes.shape({
      top_block_title: PropTypes.string,
      top_block_description: PropTypes.string,
    }),
  };

  static defaultProps = {
    fields: {},
  };

  onSelectorChanged(data) {
    Router.pushRoute('/car-auctions/car-makes/car-makes-auctions', { carMake: data.label });
  }

  render() {
    const { top_block_title: topBlockTitle, top_block_description: topBlockDescription } = this.props.fields || {};

    return (
      <div className="car-auction__header">
        <Container>
          <Row>
            <Col>
              <Subnav />
            </Col>
          </Row>
        </Container>

        <div className="header__content">
          <Container>
            <Row>
              <Col>
                <div className="pt-3">
                  <Breadcrumbs />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="pt-3 text-center">
                  <header className="section-head">
                    {topBlockTitle && <h2 dangerouslySetInnerHTML={{ __html: topBlockTitle }} />}
                    <div className="text-box mb-3">
                      <p>{topBlockDescription}</p>
                    </div>

                    <div className="header__selector-section">
                      <span className="selector-section__title">Browse car makes</span>
                      <div className="selector-section__wrapper">
                        <CommonSelector onSelect={this.onSelectorChanged} placeholder="Car makes" />
                      </div>
                    </div>
                  </header>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
