import React from 'react';
import { Link } from 'server/pages';

import { iconUserSvg } from 'static/images/icons';

const NotificationsDropdown = () => (
  <li className="mr-3">
    <Link route="/my-account">
      <span className="img-wrap">
        <img src={iconUserSvg} width="27" height="27" alt="User" />
      </span>
    </Link>
  </li>
);

export default NotificationsDropdown;
