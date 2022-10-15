import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'server/pages';

const TermsAndPolicy = ({ text }) => (
  <span className="term-and-policy-checkbox-text">
    {text}
    <Link route="/terms/customer">
      <a target="_blank">terms & conditions </a>
    </Link>
    and{' '}
    <Link route="/privacy-policy">
      <a  target="_blank">privacy policy.</a>
    </Link>
  </span>
);

TermsAndPolicy.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

TermsAndPolicy.defaultProps = {
  text: 'Please tick this box to confirm you have read and accepted the Car.service customer ',
};

export default TermsAndPolicy;
