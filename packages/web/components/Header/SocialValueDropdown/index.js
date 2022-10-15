import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Router } from 'server/pages';

import SocialValueDropdownOption from './SocialValueDropdownOption';

const SocialValueDropdown = ({ image, headLabel, links }) => {
  const [isOpen, toggleMenu] = useState(false);

  const handleMouseEnter = () => toggleMenu(true);

  const handleMouseLeave = () => toggleMenu(false);

  const handleClick = e => {
    if (e.target.id === 'menu-link') {
      toggleMenu(false);
    }
    if (e.target.id === 'collapse-arrow') {
      toggleMenu(!isOpen);
    }
    return null;
  };

  return (
    <li className="social-value-dropdown nav-item">
      <>
        <Link route="/social-value">
          <a
            id="menu-link"
            className="nav-link has-drop-down-a"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleClick}
            onTouchEnd={handleClick}
          >
            <span className="icon-wrap">
              <img src={image} width="26" height="auto" alt={headLabel} />
            </span>
            {headLabel}
          </a>
        </Link>
        <span
          id="collapse-arrow"
          className={`collapse-arrow ${isOpen ? 'collapse-arrow-rotated' : ''}`}
          onClick={handleClick}
          onKeyDown={handleClick}
          role="button"
          tabIndex="-1"
        >
          &#8249;
        </span>
      </>
      <div
        className={`dropdown-menu setting-drop ${isOpen ? 'show' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ul className="drop-list social-value-menu">
          {links.map(({ id, route, label }) => (
            <SocialValueDropdownOption key={id} route={route} label={label} />
          ))}
        </ul>
      </div>
    </li>
  );
};

SocialValueDropdown.propTypes = {
  image: PropTypes.string,
  headLabel: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string,
      label: PropTypes.oneOfType(PropTypes.string, PropTypes.element),
    }),
  ),
};

SocialValueDropdown.defaultProps = {
  headLabel: 'Social value',
  links: [
    { id: 1, route: '/social-value/residential-programme', label: 'Residential programme' },
    { id: 2, route: '/social-value/hmp-academies', label: 'HMP Academies' },
    { id: 3, route: '/social-value/food-re-distribution', label: 'Food re-distribution' },
  ],
};

export default SocialValueDropdown;
