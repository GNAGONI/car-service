import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'server/pages';

import { logoPng } from 'static/images';
import HeaderNavItem from './HeaderNavItem';

const HeaderNav = ({ children }) => {
  const wrapperRef = useRef(null);
  const [isOutside, clickOutside] = useState(true);

  const handlerNavClick = () => clickOutside(!isOutside);

  const handlerOutsideClick = () => clickOutside(true);

  const handleOutsideCLick = ref => {
    const handleClickOutside = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        handlerOutsideClick();
      }
    };

    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);

      return () => document.removeEventListener('mousedown', handleClickOutside);
    });
  };

  handleOutsideCLick(wrapperRef);

  return (
    <>
      <div className="logo">
        <Link route="/">
          <a>
            <img src={logoPng} alt="Car.service®" />
          </a>
        </Link>
      </div>
      <nav ref={wrapperRef} id="nav" className="navbar navbar-expand-xxl navbar-dark">
        <button
          onClick={handlerNavClick}
          className={isOutside ? 'navbar-toggler collapsed' : 'navbar-toggler'}
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={isOutside}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-wrap">
            <ul className="navbar-nav mr-auto">{children}</ul>
          </div>
        </div>
      </nav>
    </>
  );
}

HeaderNav.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};

HeaderNav.Item = HeaderNavItem;

export default HeaderNav;
