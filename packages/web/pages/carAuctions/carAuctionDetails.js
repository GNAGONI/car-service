import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { getAuctionPlaceBidWasPlaced, getCarMark, getCarModel } from '@car-service/redux/selectors/auction';
import { isPlaceBidSuccess } from '@car-service/redux/selectors/message';
import { Container, Row, Col } from 'react-bootstrap';
import Page from 'components/page';
import { DefaultHeader } from 'components/Header';
import Intro from 'containers/intro';
import Footer from 'components/Footer';
import AuctionDetails from 'containers/auction/AuctionDetails';
import Reviews from 'components/carAuctionTemplates/reviews';
import FeaturedListings from 'components/featuredListings';
import Subnav from 'modules/car-auctions/common/carAuctionsSubnav';
import CarAuctionBreadcrumbs from 'components/carAuction/carAuctionBreadcrumbs';
import MessagePanel from 'components/messagePanel';
import { iconThanks } from 'static/images';

class CarAuctionTemplates extends PureComponent {
  static propTypes = {
    placed: PropTypes.shape({
      isPlaced: PropTypes.bool,
    }).isRequired,
    isPlaceBidSuccess: PropTypes.bool.isRequired,
  };

  render() {
    return (
      <Page title="Car.service">
        <DefaultHeader />
        <Intro />
        <main id="main">
          <Container>
            <Row>
              <Col>
                <Subnav />
                {this.props.isPlaceBidSuccess && (
                  <MessagePanel
                    image={iconThanks}
                    title="Thank you, your bid has been placed!"
                    subTitle="We’ll keep you up-to-date on how your bid is doing and if you have been successful in securing the vehicle."
                  />
                )}
                <CarAuctionBreadcrumbs />
                <AuctionDetails />
              </Col>
            </Row>
          </Container>
          <Reviews />
          <FeaturedListings className="testimonial-slider-single" />
        </main>
        <Footer />
      </Page>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  placed: getAuctionPlaceBidWasPlaced,
  mark: getCarMark(),
  model: getCarModel(),
  isPlaceBidSuccess: isPlaceBidSuccess(),
});

export default connect(mapStateToProps)(CarAuctionTemplates);
