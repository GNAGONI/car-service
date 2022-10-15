import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';

const GratitudeList = ({ gratitudeStepsHeader, gratitudeSteps }) => (
  <Row className="gratitude__list">
    {gratitudeStepsHeader && (
      <h2 className="gratitudeList__head" dangerouslySetInnerHTML={{ __html: gratitudeStepsHeader }} />
    )}
    <ul className="gratitudeList__steps">
      {gratitudeSteps.map(({ id, stepHead, stepMessage }) => (
        <li key={id} className="gratitudeList__point">
          <div className="gratitudeList__number">
            <div>{id}</div>
          </div>
          <div>
            <h3>{stepHead}</h3>
            <p>{stepMessage}</p>
          </div>
        </li>
      ))}
    </ul>
  </Row>
);

GratitudeList.propTypes = {
  gratitudeStepsHeader: PropTypes.string,
  gratitudeSteps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      stepHead: PropTypes.string,
      stepMessage: PropTypes.string,
    }),
  ),
};

export default GratitudeList;
