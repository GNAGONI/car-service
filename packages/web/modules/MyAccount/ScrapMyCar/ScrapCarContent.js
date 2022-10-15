import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Col, Row, Container, Button } from 'react-bootstrap';

import CalculatorForm from 'components/instantQuote/CalculatorForm';
import { modalOpen } from '@car-service/redux/actions/modal';
import {
  getQuoteHistoryRequest,
  getScrappedCarsRequest,
  setDeletedQuoteId,
} from '@car-service/redux/actions/scrappedCars';
import { MODAL_TYPE } from 'containers/rootModalContainer';
import { continueWithQuoteRequest } from '@car-service/redux/actions';
import QuoteHistoryItem from './QuoteHistoryItem';
import ScrapCarItem from './ScrapCarItem';

const ScrapCarContent = ({ quotes, total, isQuoteHistory }) => {
  const dispath = useDispatch();

  const handleViewMore = async () => {
    if (isQuoteHistory) {
      dispath(getQuoteHistoryRequest());
    } else {
      dispath(getScrappedCarsRequest());
    }
  };

  const handleDeleteButton = index => {
    dispath(setDeletedQuoteId({ quoteId: quotes[index].id }));
    dispath(modalOpen({ modalType: MODAL_TYPE.deleteQuotePopup }));
  };

  const handleContinueWithQuote = index => {
    dispath(continueWithQuoteRequest({ token: quotes[index].token }));
  };

  return (
    <Container className="twocolumns my-account-scrap-car">
      {!!quotes?.length && (
        <Row className="flex-lg-row mb-5">
          <Col lg={8} className="mb-5">
            {isQuoteHistory
              ? quotes.map((quote, index) => (
                <QuoteHistoryItem
                  quote={quote}
                  onDeleteQuote={handleDeleteButton}
                  onContinueQuote={handleContinueWithQuote}
                  index={index}
                  key={quote.id}
                />
              ))
              : quotes.map(quote => <ScrapCarItem quote={quote} key={quote.id} />)}
            {quotes.length !== total && (
              <Row className="mt-3 text-center">
                <Col>
                  <Button variant="primary" size="lg" onClick={handleViewMore}>
                    View more
                  </Button>
                </Col>
              </Row>
            )}
          </Col>
          <Col lg={4}>
            <CalculatorForm />
          </Col>
        </Row>
      )}
    </Container>
  );
};

ScrapCarContent.propTypes = {
  quotes: PropTypes.array,
  total: PropTypes.number,
  isQuoteHistory: PropTypes.bool.isRequired,
};

ScrapCarContent.defaultProps = {
  quotes: [],
  total: 0,
};

export default ScrapCarContent;
