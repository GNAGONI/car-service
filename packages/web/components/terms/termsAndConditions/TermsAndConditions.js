import React from 'react';
import PropTypes from 'prop-types';

import TermsAndConditionsInfo from './TermsAndConditionsInfo';
import TermsAndConditionsMedia from './TermsAndConditionsMedia';

const TermsAndConditions = ({ children }) => <section className="website-terms-container">{children}</section>;

TermsAndConditions.Info = TermsAndConditionsInfo;
TermsAndConditions.Media = TermsAndConditionsMedia;

TermsAndConditions.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default TermsAndConditions;
