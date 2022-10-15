import React from 'react';

import { iconAuctionSvg, iconDashboardSvg, iconSettingSvg } from 'static/images/icons';
import NotificationsDropdown from './NotificationsDropdown';
import SettingsDropdown from './SettingsDropdown';
import Header from './HeaderWrapper';

const CustomerPortalHeader = () => (
  <Header>
    <Header.Nav>
      <Header.Nav.Item image={iconAuctionSvg} link="/my-account" name="My account" />
      <Header.Nav.Item image={iconDashboardSvg} link="/my-account/scrap-my-car" name="Scrap my car" />
      <Header.Nav.Item image={iconSettingSvg} link="/my-account/settings" name="Settings" />
    </Header.Nav>
    <ul className="option-links">
      <NotificationsDropdown />
      <SettingsDropdown />
    </ul>
  </Header>
);

export default CustomerPortalHeader;
