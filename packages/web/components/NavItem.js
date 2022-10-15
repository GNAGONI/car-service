import React from 'react';
import cn from 'classnames';
import { Link } from 'server/pages';
import PropTypes from 'prop-types';

const NavItem = ({ key, name, link, isActive, className }) => (
  <li key={`${key}-nav-item--${link}`} className={cn(className, { active: isActive })}>
    <Link route={link}>
      <a>{name}</a>
    </Link>
  </li>
);

NavItem.propTypes = {
  key: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.any.isRequired,
  isActive: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

NavItem.defaultProps = {
  className: '',
};

export default NavItem;
