import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { authentificatedRoute } from 'lib/routes';
import Page from 'components/page';
import { CustomerPortalHeader } from 'components/Header';
import Footer from 'components/Footer';
import Breadcrumbs from 'components/Breadcrumbs';
import Navigation from 'modules/MyAccount/ScrapMyCar/Navigation';
import PageHeader from 'components/PageHeader';
import ScrapCarContent from 'modules/MyAccount/ScrapMyCar/ScrapCarContent';
import ScrapCarContentPlaceholder from 'modules/MyAccount/ScrapMyCar/ScrapCarContentPlaceholder';
import { useDispatch, useSelector } from 'react-redux';
import {
  getScrappedCarsItems,
  getScrappedCarsTotal,
  isScrappedCarsInitialized,
} from '@car-service/redux/selectors/scrappedCars';
import { getScrappedCarsRequest, initializeScrappedCars } from '@car-service/redux/actions/scrappedCars';
import { Container } from 'react-bootstrap';

const ScrappedCars = ({ headerTitle, headerText }) => {
  const dispatch = useDispatch();
  const quotesTotal = useSelector(getScrappedCarsTotal);
  const quotes = useSelector(getScrappedCarsItems);
  const isInitialized = useSelector(isScrappedCarsInitialized);

  useEffect(() => {
    dispatch(initializeScrappedCars());
    dispatch(getScrappedCarsRequest());
  }, []);

  return (
    <Page title="Scrapped cars">
      <CustomerPortalHeader />
      <main id="main" className="bg-before-white">
        <Navigation />
        <Breadcrumbs />
        <Container>
          {isInitialized && quotesTotal > 0 && (
            <>
              <PageHeader headerTitle={headerTitle} headerText={headerText} isHighlitedHeader />
              <ScrapCarContent quotes={quotes} total={quotesTotal} isQuoteHistory={false} />
            </>
          )}
          {isInitialized && !quotesTotal && <ScrapCarContentPlaceholder />}
        </Container>
      </main>
      <Footer />
    </Page>
  );
};
ScrappedCars.propTypes = {
  headerTitle: PropTypes.string,
  headerText: PropTypes.string,
};

ScrappedCars.defaultProps = {
  headerTitle: `Scrapped cars`,
  headerText: `Below you will find a details of all the cars you have scrapped on Car.service, which contains the vehicle details including car registration and postcode and also the price you scrapped the car for`,
};

ScrappedCars.getInitialProps = async ctx => {
  authentificatedRoute(ctx);
};

export default ScrappedCars;
