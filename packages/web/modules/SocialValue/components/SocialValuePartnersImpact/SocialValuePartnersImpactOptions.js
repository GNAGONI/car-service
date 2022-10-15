import React from 'react';
import PropTypes from 'prop-types';
import { Row, Container } from 'react-bootstrap';
import SocialValuePartnersImpactOption from './SocialValuePartnersImpactOption';

const SocialValuePartnersImpactOptions = ({ title, children }) => (
  <>
    <Row className="impact-options">{title && <h3 dangerouslySetInnerHTML={{ __html: title }} />}</Row>
    <Container className="impact-options">
      <Row>{children}</Row>
    </Container>
  </>
);

SocialValuePartnersImpactOptions.Option = SocialValuePartnersImpactOption;

SocialValuePartnersImpactOptions.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  children: PropTypes.arrayOf(PropTypes.element),
};

export default SocialValuePartnersImpactOptions;
