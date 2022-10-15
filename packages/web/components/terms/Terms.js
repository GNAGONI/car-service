import React from 'react';
import PropTypes from 'prop-types';

import TermsHeader from './TermsHeader';
import TermsOptions from './TermsOptions';

const Terms = ({ children }) => <section className="terms">{children}</section>;

Terms.Header = TermsHeader;
Terms.Options = TermsOptions;

Terms.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default Terms;
