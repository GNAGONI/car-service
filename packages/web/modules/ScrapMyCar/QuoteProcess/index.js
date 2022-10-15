import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import MultiStepProgress from 'components/MultiStep/MultiStepProgress';
import EnterDetails from './EnterDetails';
import OnlineQuotation from './OnlineQuotation';
import PaymentMethod from './PaymentMethod';
import Confirmation from './Confirmation';
import ArrangeACollection from './ArrangeACollection';

const QuoteProcess = ({ page }) => {
  const steps = [
    { name: 'Enter your details', component: <EnterDetails /> },
    { name: 'Online quotation', component: <OnlineQuotation /> },
    { name: 'Arrange a collection', component: <ArrangeACollection /> },
    { name: 'Payment method', component: <PaymentMethod /> },
    { name: 'Confirmation', component: <Confirmation /> },
  ];

  return (
    <Container>
      <Row>
        <Col>
          <section className="section-process extend content bg-before-default form-large form-bordered b-validation quote-process-multistep-section section-not-defined-title">
            <MultiStepProgress page={page} stepNames={steps.map(item => item.name)} />
            <div className="content-holder">{steps[page]?.component}</div>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

QuoteProcess.propTypes = {
  page: PropTypes.number.isRequired,
};

export default QuoteProcess;
