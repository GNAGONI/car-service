import React from 'react';
import PropTypes from 'prop-types';

import Page from 'components/page';
import Breadcrumbs from 'components/Breadcrumbs';
import { DefaultHeader } from 'components/Header';
import Footer from 'components/Footer';
import Terms from 'components/terms/Terms';
import { iconPartners, iconTems, iconWebsite } from 'static/images/icons';

const BREADCRUMBS = [
  {
    name: 'Website & partner terms & conditions',
    link: '/terms',
  },
];

const TermsAndConditions = ({ title, termsHeaderTitle, termsHeaderSubHeader, termsOptions }) => (
  <Page title={title}>
    <DefaultHeader />
    <Terms>
      <Breadcrumbs breadcrumbs={BREADCRUMBS} />
      <Terms.Header termsHeaderLabel={termsHeaderTitle} termsSubHeader={termsHeaderSubHeader} />
      <Terms.Options termsOptions={termsOptions} />
    </Terms>
    <Footer />
  </Page>
);

TermsAndConditions.propTypes = {
  title: PropTypes.string,
  termsHeaderTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  termsHeaderSubHeader: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  termsOptions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      link: PropTypes.string,
      icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      headerLabel: PropTypes.string,
      descriptionLabel: PropTypes.string,
    }),
  ),
};

TermsAndConditions.defaultProps = {
  title: 'Terms & conditions',
};

TermsAndConditions.getInitialProps = () => ({
  termsHeaderTitle: 'Website and partner <strong>terms &amp; conditions</strong>',
  termsHeaderSubHeader:
    'When you use Car.service, we work hard to make sure you have an outstanding experience\n' +
    'and get the best possible deals from our partners. To make sure this is the case, we have\n' +
    'terms and conditions covering everything we do.',
  termsOptions: [
    {
      id: 1,
      link: '/terms/website',
      icon: iconWebsite,
      headerLabel: '<strong>Website terms &amp; conditions</strong>',
      descriptionLabel: 'Terms and conditions that apply when you use the Car.service website',
    },
    {
      id: 2,
      link: '/terms/customer',
      icon: iconTems,
      headerLabel: '<strong>Customer terms &amp; conditions</strong>',
      descriptionLabel: 'Terms and conditions that apply when you use one of our services or products',
    },
    {
      id: 3,
      link: '/terms/partner',
      icon: iconPartners,
      headerLabel: '<strong>Partner terms &amp; conditions</strong>',
      descriptionLabel: 'Terms and conditions that apply to the business partners we work alongside',
    },
  ],
});

export default TermsAndConditions;
