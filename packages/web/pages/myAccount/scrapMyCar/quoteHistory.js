import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { authentificatedRoute } from 'lib/routes';
import Page from 'components/page';
import { CustomerPortalHeader } from 'components/Header';
import Footer from 'components/Footer';
import Navigation from 'modules/MyAccount/ScrapMyCar/Navigation';
import Breadcrumbs from 'components/Breadcrumbs';
import PageHeader from 'components/PageHeader';
import ScrapCarContent from 'modules/MyAccount/ScrapMyCar/ScrapCarContent';
import ScrapCarContentPlaceholder from 'modules/MyAccount/ScrapMyCar/ScrapCarContentPlaceholder';
import { getQuoteHistoryRequest, initializeQuoteHistory } from '@car-service/redux/actions/scrappedCars';
import { useDispatch, useSelector } from 'react-redux';
import {
  getQuoteHistoryTotal,
  getQuoteHistoryItems,
  isQuoteHistoryInitialized,
} from '@car-service/redux/selectors/scrappedCars';
import { Container } from 'react-bootstrap';

const QuoteHistoryPage = ({ headerTitle, headerText }) => {
  const dispatch = useDispatch();
  const quotesTotal = useSelector(getQuoteHistoryTotal);
  const quotes = useSelector(getQuoteHistoryItems);
  const isInitialized = useSelector(isQuoteHistoryInitialized);

  useEffect(() => {
    dispatch(initializeQuoteHistory());
    dispatch(getQuoteHistoryRequest());
  }, []);

  return (
    <Page title="Quote history">
      <CustomerPortalHeader />
      <main id="main" className="bg-before-white">
        <Navigation />
        <Breadcrumbs />
        <Container>
          {isInitialized && quotesTotal > 0 && (
            <>
              <PageHeader headerTitle={headerTitle} headerText={headerText} isHighlitedHeader />
              <ScrapCarContent quotes={quotes} total={quotesTotal} isQuoteHistory />
            </>
          )}
          {isInitialized && !quotesTotal && <ScrapCarContentPlaceholder />}
        </Container>
      </main>
      <Footer />
    </Page>
  );
};

QuoteHistoryPage.propTypes = {
  headerTitle: PropTypes.string,
  headerText: PropTypes.string,
};

QuoteHistoryPage.defaultProps = {
  headerTitle: `Quote history`,
  headerText: `Below you will find a details of all the cars you have previously got a scrap car quote for. You can either proceed with that quote if it was within the last 7 days or refresh the prices to get an updated price for your scrap car`,
};

QuoteHistoryPage.getInitialProps = async ctx => {
  authentificatedRoute(ctx);
};

export default QuoteHistoryPage;
