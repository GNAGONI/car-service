import React, { useState } from 'react';
import cn from 'classnames';
import { Link } from 'server/pages';
import { useDispatch } from 'react-redux';

import { userLogoutRequest } from '@car-service/redux/actions/user';
import { iconSettingSvg, iconProfileSvg, iconLogout, iconChangePasswordBoldSvg } from 'static/images/icons';

const SettingsDropdown = () => {
  const [isOpen, toggleMenu] = useState(false);

  const dispatch = useDispatch();
  const handleLogout = () => dispatch(userLogoutRequest({}, {}, '/'));

  const handleOpenMenu = () => toggleMenu(true);
  const handleCloseMenu = () => toggleMenu(false);

  const handleClick = () => toggleMenu(!isOpen);

  return (
    <li className={cn('dropdown', 'settings-dropdown', isOpen ? 'show' : '')}>
      <Link route="/my-account/settings">
        <a
          className="dropdown-toggle"
          id="dropdownSetting"
          aria-expanded={isOpen}
          onMouseEnter={handleOpenMenu}
          onMouseLeave={handleCloseMenu}
        >
          <span className="img-wrap">
            <img src={iconSettingSvg} width="25" height="auto" alt="setting icon" />
          </span>
        </a>
      </Link>
      <span
        id="collapse-arrow"
        className={cn('collapse-arrow', isOpen ? 'collapse-arrow-rotated' : '')}
        onClick={handleClick}
        onKeyDown={handleClick}
        role="button"
        tabIndex="-1"
      >
        &#8249;
      </span>
      <div
        className={cn('dropdown-menu', 'setting-drop', 'dropdown-menu-settings', isOpen ? 'show' : '')}
        aria-labelledby="dropdownSetting"
        onMouseEnter={handleOpenMenu}
        onMouseLeave={handleCloseMenu}
      >
        <ul className="drop-list">
          <li>
            <Link route="/my-account/settings/edit-profile">
              <a>
                <div className="icon-wrap">
                  <img src={iconProfileSvg} width="16" height="auto" alt="Profile" />
                </div>
                <div className="text-holder">
                  <p>Edit profile</p>
                </div>
              </a>
            </Link>
          </li>

          <li>
            <Link route="/my-account/settings/change-password">
              <a>
                <div className="icon-wrap">
                  <img src={iconChangePasswordBoldSvg} width="16" height="auto" alt="Change password" />
                </div>
                <div className="text-holder">
                  <p>Change password</p>
                </div>
              </a>
            </Link>
          </li>

          <li>
            <div onClick={handleLogout} onKeyPress={() => {}} role="link" tabIndex="0">
              <div className="icon-wrap">
                <img src={iconLogout} width="16" height="auto" alt="Car makes" />
              </div>
              <div className="text-holder">
                <p>Log out</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default SettingsDropdown;
