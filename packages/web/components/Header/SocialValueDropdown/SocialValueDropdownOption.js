import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'server/pages';

const SocialValueDropdownOption = ({ route, label }) => (
  <li className="social-value-menu-option">
    <Link route={route}>
      <a>
        <div className="text-holder">
          <p>{label}</p>
        </div>
      </a>
    </Link>
  </li>
);

SocialValueDropdownOption.propTypes = {
  route: PropTypes.string,
  label: PropTypes.oneOfType(PropTypes.string, PropTypes.element),
};

export default SocialValueDropdownOption;
