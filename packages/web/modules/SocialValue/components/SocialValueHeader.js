import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

const SocialValueHeader = ({ title }) => (
  <div className="header">
    <Container>{title ? <h2 className="title" dangerouslySetInnerHTML={{ __html: title }} /> : null}</Container>
  </div>
);

SocialValueHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SocialValueHeader;
