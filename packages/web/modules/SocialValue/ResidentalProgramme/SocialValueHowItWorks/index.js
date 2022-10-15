import React from 'react';
import PropTypes from 'prop-types';

import SocialValueHowItWorksArticle from './SocialValueHowItWorksArticle';
import HowItWorksSection from './HowItWorksSection';

const SocialValueHowItWorks = ({ children }) => <main className="social-value-how-it-works">{children}</main>;

SocialValueHowItWorks.Article = SocialValueHowItWorksArticle;
SocialValueHowItWorks.Point = HowItWorksSection;

SocialValueHowItWorks.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default SocialValueHowItWorks;
