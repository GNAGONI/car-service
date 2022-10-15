import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import CalculatorForm from 'components/instantQuote/CalculatorForm';
import CarMakesList from './CarMakesList';

const CarMakeModelSection = ({ title, text, carMakesListItems }) => (
  <section className="content bg-before-info section-calculator">
    <Row>
      <Col lg={5} md={6} className="content-block content-block-calculator">
        <CalculatorForm />
      </Col>
      <Col lg={7} md={6} className="content-block">
        <header className="section-head">
          {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
          <div className="text-box">
            <p></p>
            {text && <p dangerouslySetInnerHTML={{ __html: text }} />}
          </div>
        </header>
        <CarMakesList carMakesListItems={carMakesListItems} />
        {
          // TODO: Return the link when pages for car makes and models will be implemented
          /* <div className="btn-block">
            <a href="/scrap-my-car/car-makes" className="btn btn-dark btn-xs">
              View all brands
            </a>
          </div> */
        }
      </Col>
    </Row>
  </section>
);

CarMakeModelSection.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  carMakesListItems: PropTypes.array,
};

CarMakeModelSection.defaultProps = {
  title: '',
  text: '',
  carMakesListItems: [],
};

export default CarMakeModelSection;
