import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Page from 'components/page';
import { DefaultHeader } from 'components/Header';
import Footer from 'components/Footer';
import QuoteProcess from 'modules/ScrapMyCar/QuoteProcess';
import { checkQuoteStatus } from 'webSpecificRedux/sagas/scrapMyCarRedirectSaga';
import { QUOTE_STATUS, QUOTE_ROUTES } from 'modules/ScrapMyCar/QuoteProcess/constants';

const OnlineQuotation = () => (
  <Page title="Online quotation">
    <DefaultHeader />
    <main id="main">
      <Container>
        <Row>
          <Col>
            <QuoteProcess page={1} />
          </Col>
        </Row>
      </Container>
    </main>
    <Footer />
  </Page>
);

OnlineQuotation.getInitialProps = ctx => {
  checkQuoteStatus(ctx, QUOTE_ROUTES.HOMEPAGE, QUOTE_STATUS.CREATED, QUOTE_ROUTES.ONLINE_QUOTATION);
};

export default OnlineQuotation;
