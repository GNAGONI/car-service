import React from 'react';
import PropTypes from 'prop-types';

import { iconFinance1, iconMap, iconInstant, iconMoney, iconPaperwork } from 'static/images/icons';
import Page from 'components/page';
import Intro from 'modules/ScrapMyCar/Intro';
import ScrapClarificationSection from 'components/ScrapClarificationSection';
import { DefaultHeader as Header } from 'components/Header';
import Footer from 'components/Footer';

const introTitle = 'Not <strong>your car?</strong>';
const introText =
  "It looks like you inputted details that didn't match your car. Please input the correct car details below to get an instant scrap quote for your car.";

const scrapClarification = {
  title: 'Why choose <strong>Car.service</strong> to scrap your car',
  text:
    'From instant online quotes to free scrap car collection from any location, we make sure every step is quick, easy, and friendly. We’ll even help with the official paperwork',
  clarificationItems: [
    {
      title: 'Best prices <br /> for your car',
      icon: iconFinance1,
    },
    {
      title: 'Free nationwide <br /> collection',
      icon: iconMap,
    },
    {
      title: 'Instant price <br /> online',
      icon: iconInstant,
    },
    {
      title: 'Quick <br /> payment',
      icon: iconMoney,
    },
    {
      title: 'Official paperwork <br /> sorted',
      icon: iconPaperwork,
    },
  ],
};

const NotMyCar = ({ title }) => (
  <Page title={title}>
    <Header />
    <main className="not-my-car">
      <Intro title={introTitle} text={introText} />
      <ScrapClarificationSection {...scrapClarification} />
    </main>
    <Footer />
  </Page>
);

NotMyCar.propTypes = {
  title: PropTypes.string,
};

NotMyCar.defaultProps = {
  title: 'Not my car',
};

export default NotMyCar;
