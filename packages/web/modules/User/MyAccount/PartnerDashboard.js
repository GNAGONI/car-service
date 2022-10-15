import React from 'react';
import PropTypes from 'prop-types';

import Dashboard from 'components/Dashboard';

import {
  iconLiveSvg,
  iconPendingSvg,
  iconAwaitingSvg,
  iconVehiclesSvg,
  iconInvoices2Svg,
  iconReportsSvg,
  iconReviewsSvg,
  iconSupportSvg,
} from 'static/images/icons';

const PartnerDashboard = ({ title, description }) => (
  <Dashboard title={title} description={description}>
    <Dashboard.Item image={iconLiveSvg} link="/car-auctions/live-auctions" linkText="Live auctions" />
    <Dashboard.Item image={iconPendingSvg} link="/car-auctions/pending-payments" linkText="Pending payments" />
    <Dashboard.Item image={iconAwaitingSvg} link="/car-auctions/awaiting-collection" linkText="Awaiting collection" />
    <Dashboard.Item image={iconVehiclesSvg} link="/car-auctions/collected-vehicles" linkText="Collected vehicles" />
    <Dashboard.Item image={iconInvoices2Svg} link="/car-auctions/invoices" linkText="Invoices" />
    <Dashboard.Item image={iconReviewsSvg} link="/car-auctions/reviews" linkText="Reviews" />
    <Dashboard.Item image={iconReportsSvg} link="/car-auctions/reports" linkText="Reports" />
    <Dashboard.Item image={iconSupportSvg} link="/car-auctions/support" linkText="Support" />
  </Dashboard>
);

PartnerDashboard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

PartnerDashboard.defaultProps = {
  title: '',
  description: '',
};

export default PartnerDashboard;
