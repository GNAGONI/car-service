import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';

const TermsHeader = ({ termsHeaderLabel, termsSubHeader }) => (
  <Row className="gratitude__head">
    {termsHeaderLabel && (
      <h2 className="gratitudeHead__header" dangerouslySetInnerHTML={{ __html: termsHeaderLabel }} />
    )}
    {termsSubHeader && <p className="gratitudeHead__text" dangerouslySetInnerHTML={{ __html: termsSubHeader }} />}
  </Row>
);

TermsHeader.propTypes = {
  termsHeaderLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  termsSubHeader: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default TermsHeader;
