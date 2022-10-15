import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'server/pages';

import { iconDashboardSvg, iconNewsSvg, iconReportsSvg } from 'static/images/icons';
import { isUserAuthenticatedSelector } from '@car-service/redux/selectors/userAuth';
import NotificationsDropdown from './NotificationsDropdown';
import SettingsDropdown from './SettingsDropdown';
import SocialValueDropdown from './SocialValueDropdown';
import Header from './HeaderWrapper';

const DefaultHeader = () => {
  const isUserAuthenticated = useSelector(isUserAuthenticatedSelector);

  return (
    <Header>
      <Header.Nav>
        <Header.Nav.Item image={iconDashboardSvg} link="/scrap-my-car" name="Scrap my car" />
        <SocialValueDropdown image={iconReportsSvg} />
        <Header.Nav.Item image={iconNewsSvg} link="/contact" name="Contact" />
      </Header.Nav>
      {isUserAuthenticated ? (
        <ul className="option-links">
          <NotificationsDropdown />
          <SettingsDropdown />
        </ul>
      ) : (
        <Link route="/sign-in">
          <a className="btn btn-sm btn-default">
            <i className="icon-login" />
            Sign in
          </a>
        </Link>
      )}
    </Header>
  );
};

export default DefaultHeader;
