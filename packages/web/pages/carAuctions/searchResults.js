import React, { PureComponent } from 'react';
import { withRouter } from 'next/router';
import { Container, Row, Col } from 'react-bootstrap';

import Page from 'components/page';
import { DefaultHeader } from 'components/Header';
import Footer from 'components/Footer';
import Intro from 'containers/intro';
import Subnav from 'modules/car-auctions/common/carAuctionsSubnav';
import Auction from 'containers/auction';
import Breadcrumbs from 'components/Breadcrumbs';
import SubHeader from 'containers/searchResults/subHeader';

class SearchResult extends PureComponent {
  render() {
    return (
      <Page title="Car.service">
        <DefaultHeader />
        <Intro />
        <main id="main">
          <div className="car-auction__header">
            <Container>
              <Row>
                <Col>
                  <Subnav />
                  <Breadcrumbs />
                  <SubHeader />
                </Col>
              </Row>
            </Container>
            <Container>
              <Row>
                <Col>
                  <Auction />
                </Col>
              </Row>
            </Container>
          </div>
        </main>
        <Footer />
      </Page>
    );
  }
}

export default withRouter(SearchResult);
