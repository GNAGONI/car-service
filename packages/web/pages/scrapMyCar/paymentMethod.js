import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { authentificatedRoute } from 'lib/routes';
import Page from 'components/page';
import { DefaultHeader } from 'components/Header';
import Footer from 'components/Footer';
import QuoteProcess from 'modules/ScrapMyCar/QuoteProcess';
import { checkQuoteStatus } from 'webSpecificRedux/sagas/scrapMyCarRedirectSaga';
import { QUOTE_STATUS, QUOTE_ROUTES } from 'modules/ScrapMyCar/QuoteProcess/constants';

const PaymentMethodPage = () => (
  <Page title="Payment method">
    <DefaultHeader />
    <main id="main">
      <Container>
        <Row>
          <Col>
            <QuoteProcess page={3} />
          </Col>
        </Row>
      </Container>
    </main>
    <Footer />
  </Page>
);

PaymentMethodPage.getInitialProps = ctx => {
  authentificatedRoute(ctx, QUOTE_ROUTES.ARRANGE_COLLECTION);
  checkQuoteStatus(ctx, QUOTE_ROUTES.HOMEPAGE, QUOTE_STATUS.PENDING_PAYMENT, QUOTE_ROUTES.PAYMENT_METHOD);
};

export default PaymentMethodPage;
