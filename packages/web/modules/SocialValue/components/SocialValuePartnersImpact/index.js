import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

import SocialValuePartnersImpactHeader from './SocialValuePartnersImpactHeader';
import SocialValuePartnersImpactOptions from './SocialValuePartnersImpactOptions';

const SocialValuePartnersImpact = ({ children }) => (
  <div className="impact">
    <Container>{children}</Container>
  </div>
);

SocialValuePartnersImpact.Header = SocialValuePartnersImpactHeader;
SocialValuePartnersImpact.Options = SocialValuePartnersImpactOptions;

SocialValuePartnersImpact.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default SocialValuePartnersImpact;
