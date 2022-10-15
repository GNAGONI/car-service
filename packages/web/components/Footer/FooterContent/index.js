import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';

import FooterContentItem from './FooterContentItem';
import SocialInfo from './SocialInfo';

const FooterContent = ({ title, children }) => (
  <Row className="footer-content">
    <h4>{title}</h4>
    {children}
  </Row>
);

FooterContent.propTypes = {
  title: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
};

FooterContent.Item = FooterContentItem;
FooterContent.SocialInfo = SocialInfo;

export default FooterContent;
