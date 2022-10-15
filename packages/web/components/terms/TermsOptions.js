import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';
import TermsOption from 'components/TermsOption';

const TermsOptions = ({ termsOptions }) => (
  <Row className="terms-options flex-wrap">
    {termsOptions.map(({ id, link, icon, headerLabel, descriptionLabel }) => (
      <TermsOption key={id} icon={icon} link={link} headerLabel={headerLabel} descriptionLabel={descriptionLabel} />
    ))}
  </Row>
);

TermsOptions.propTypes = {
  termsOptions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      link: PropTypes.string,
      icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      headerLabel: PropTypes.string,
      descriptionLabel: PropTypes.string,
    }),
  ),
};

export default TermsOptions;
