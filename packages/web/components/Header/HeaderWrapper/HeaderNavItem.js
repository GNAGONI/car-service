import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'server/pages';

const HeaderItem = ({ image, link, name }) => (
  <li className="nav-item" key={link}>
    <Link route={link}>
      <a className="nav-link">
        <span className="icon-wrap">
          <img src={image} width="26" height="auto" alt={name} />
        </span>
        {name}
      </a>
    </Link>
  </li>
);

HeaderItem.propTypes = {
  image: PropTypes.string,
  link: PropTypes.string,
  name: PropTypes.string,
};

HeaderItem.defaultProps = {
  image: '',
  link: '',
  name: '',
};

export default HeaderItem;
