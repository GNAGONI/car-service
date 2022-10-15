import React from 'react';
import ScrapClarificationSection from 'components/ScrapClarificationSection';
import Breadcrumbs from 'components/Breadcrumbs';
import { iconFinance, iconMap, iconInstant, iconMoney, iconPaperwork } from 'static/images/icons';

const scrapClarification = {
  title: 'We <strong>help</strong> with full car scrapping process',
  text:
    'From instant online quotes to free scrap car collection from any location, we make sure every step is quick, easy, and friendly. We’ll even help with the official paperwork!',
  clarificationItems: [
    {
      title: 'Best prices <br /> for your car',
      icon: iconFinance,
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

const ScrapWithCarCoSection = () => (
  <>
    <Breadcrumbs />
    <section className="content section-scraping bg-before-info">
      <ScrapClarificationSection {...scrapClarification} />
    </section>
  </>
);

export default ScrapWithCarCoSection;
