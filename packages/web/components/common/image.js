import React from 'react';
import PropTypes from 'prop-types';
import { noImage } from 'static/images';

const Image = ({ src, alt, ...props }) => <img alt={alt} src={src || noImage} {...props} />;

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Image;
