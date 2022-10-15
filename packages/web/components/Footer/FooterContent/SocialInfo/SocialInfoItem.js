import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Link } from 'server/pages';

const SocialInfoItem = ({ link, icon, name }) => (
  <li key={link}>
    <Link route={link}>
      <a target="_blank" className={cn({ [`icon-${icon}`]: icon })}>
        <span className="sr-only">{name}</span>
      </a>
    </Link>
  </li>
);

SocialInfoItem.propTypes = {
  link: PropTypes.string,
  icon: PropTypes.string,
  name: PropTypes.string,
};

export default SocialInfoItem;
