import React from 'react';
import cn from 'classnames';
import { Link } from 'server/pages';
import PropTypes from 'prop-types';

const NavItem = ({ name, link, active }) => (
  <li key={link} className={cn('breadcrumb-item', { active })}>
    <Link route={link}>
      <a>{name}</a>
    </Link>
  </li>
);

NavItem.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  active: PropTypes.bool,
};

NavItem.defaultProps = {
  name: '',
  link: '',
  active: false,
};

export default NavItem;
