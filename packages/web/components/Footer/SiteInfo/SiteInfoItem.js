import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'server/pages';

const SiteInfoItem = ({ link, text }) => (
  <li key={link}>
    <Link route={link}>
      <a>&nbsp;{text}&nbsp;</a>
    </Link>
  </li>
);

SiteInfoItem.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
};

SiteInfoItem.defaultProps = {
  link: '',
  text: '',
};

export default SiteInfoItem;
