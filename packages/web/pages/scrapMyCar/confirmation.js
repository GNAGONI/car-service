import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Page from 'components/page';
import { DefaultHeader } from 'components/Header';
import Footer from 'components/Footer';
import QuoteProcess from 'modules/ScrapMyCar/QuoteProcess';
import { checkQuoteStatus } from 'webSpecificRedux/sagas/scrapMyCarRedirectSaga';
import { QUOTE_STATUS, QUOTE_ROUTES } from 'modules/ScrapMyCar/QuoteProcess/constants';

const ConfirmationPage = () => (
  <Page title="Confirmation">
    <DefaultHeader />
    <main id="main">
      <Container>
        <Row>
          <Col>
            <QuoteProcess page={4} />
          </Col>
        </Row>
      </Container>
    </main>
    <Footer />
  </Page>
);

ConfirmationPage.getInitialProps = ctx => {
  checkQuoteStatus(ctx, QUOTE_ROUTES.HOMEPAGE, QUOTE_STATUS.CONFIRMED, QUOTE_ROUTES.CONFIRMATION);
};

export default ConfirmationPage;
