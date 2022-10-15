import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'server/pages';

const DashboardItem = ({ link, children }) => (
  <Link route={link}>
    <article className="dashboard-option" key={link}>
      <div className="align">{children}</div>
    </article>
  </Link>
);

DashboardItem.propTypes = {
  link: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.object),
};

DashboardItem.defaultProps = {
  link: '',
};

export default DashboardItem;
