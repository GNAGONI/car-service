import React from 'react';
import PropTypes from 'prop-types';

import Dashboard from 'components/Dashboard';

import { iconSettings, iconScrapMyCar } from 'static/images/icons';

const CustomerDashboard = ({ title, description }) => (
  <Dashboard title={title} description={description} colNum={3}>
    <Dashboard.Item link="/my-account/scrap-my-car">
      <div className="icon-wrap">
        <img src={iconScrapMyCar} width="120" alt="Scrap my car" />
      </div>
      <div className="link">Scrap my car</div>
    </Dashboard.Item>
    <Dashboard.Item link="/my-account/settings">
      <div className="icon-wrap">
        <img src={iconSettings} width="120" alt="Settings" />
      </div>
      <div className="link">Settings</div>
    </Dashboard.Item>
  </Dashboard>
);

CustomerDashboard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

CustomerDashboard.defaultProps = {
  title: '',
  description: '',
};

export default CustomerDashboard;
