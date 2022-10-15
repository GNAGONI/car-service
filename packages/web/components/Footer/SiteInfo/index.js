import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'server/pages';

import SiteInfoItem from './SiteInfoItem';

const SiteInfo = ({ children }) => (
  <div className="site-info text-center">
    <span className="copyright">© {new Date().getFullYear()}&nbsp; Car.service</span>
    <nav className="site-links">
      <ul>{children}</ul>
    </nav>
  </div>
);

SiteInfo.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

SiteInfo.Item = SiteInfoItem;

export default SiteInfo;
