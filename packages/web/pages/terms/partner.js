import React from 'react';
import PropTypes from 'prop-types';

import Page from 'components/page';
import Breadcrumbs from 'components/Breadcrumbs';
import { DefaultHeader } from 'components/Header';
import Footer from 'components/Footer';
import Terms from 'components/terms/Terms';
import { iconPartners } from 'static/images/icons';

const BREADCRUMBS = [
  {
    name: 'Website & partner terms & conditions',
    link: '/terms',
  },
  {
    name: 'Partner terms & conditions',
    link: '/terms/partner',
  },
];

const PartnerTermsAndConditions = ({ title, termsHeaderTitle, termsHeaderSubHeader, termsOptions }) => (
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

PartnerTermsAndConditions.propTypes = {
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

PartnerTermsAndConditions.defaultProps = {
  title: 'Partner terms & conditions',
};

PartnerTermsAndConditions.getInitialProps = () => ({
  termsHeaderTitle: 'Partner <strong>terms &amp; conditions</strong>',
  termsHeaderSubHeader: 'Terms and conditions that apply to the business partners we work alongside',
  termsOptions: [
    {
      id: 1,
      link: '/terms/partner/business',
      icon: iconPartners,
      headerLabel: '<strong>Business terms &amp; conditions</strong>',
    },
  ],
});

export default PartnerTermsAndConditions;
