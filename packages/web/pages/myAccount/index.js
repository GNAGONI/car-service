import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Page from 'components/page';
import { CustomerPortalHeader } from 'components/Header';
import Footer from 'components/Footer';
import Breadcrumbs from 'components/Breadcrumbs';

import CustomerDashboard from 'modules/User/MyAccount/CustomerDashboard';
import PartnerDashboard from 'modules/User/MyAccount/PartnerDashboard';

import { authentificatedRoute } from 'lib/routes';
import { getUserFirstNameSelector } from '@car-service/redux/selectors/user';
import { getUserTypeSelector } from '@car-service/redux/selectors/userAuth';
import { getUserDataRequest } from '@car-service/redux/actions/user';

const MyAccount = () => {
  const dispatch = useDispatch();
  let dashboardLayout;

  useEffect(() => {
    dispatch(getUserDataRequest());
  }, []);

  const userType = useSelector(state => getUserTypeSelector(state));
  const userFirstName = useSelector(state => getUserFirstNameSelector(state));

  const title = `<h1>Welcome to <strong>your dashboard, ${userFirstName}</strong></h1>`;
  const description =
    '<p>Within your dashboard you&apos;re able to find all information on all products or services you have shown interest on Car.service, as well as being able to edit your personal details</p>';

  if (userType === 'customer') {
    dashboardLayout = <CustomerDashboard title={title} description={description} />;
  }

  if (userType === 'partner') {
    dashboardLayout = <PartnerDashboard title={title} description={description} />;
  }

  return (
    <Page title="Customer portal (Dashboard)">
      <CustomerPortalHeader />
      <main id="main" className="bg-before-white my-account">
        <Breadcrumbs />
        {dashboardLayout}
      </main>
      <Footer />
    </Page>
  );
};

MyAccount.getInitialProps = ctx => {
  authentificatedRoute(ctx);
};

export default MyAccount;
