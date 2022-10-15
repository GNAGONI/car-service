import React from 'react';
import PropTypes from 'prop-types';

import Page from 'components/page';
import { DefaultHeader } from 'components/Header';
import Footer from 'components/Footer';
import { SocialValueHeader, SocialValuePartnersImpact, SocialValueArticle } from 'modules/SocialValue/components';
import { SocialValueSchemes } from 'modules/SocialValue/SocialValueSchemes';
import { independentLiving, rehabilitation, mealDelivery, savings } from 'static/images/icons';
import { socialValueMainPeople1, socialValueMainPeople2 } from 'static/images';

const SocialValue = ({
  title,
  headerTitle,
  impactHeaderTitle,
  impactHeaderText,
  impactOptionsTitle,
  options,
  articleHeader,
  articleSubHeader,
  articleText,
  articleList,
  articleLastParagraph,
  secondArticleHeader,
  secondArticleText,
}) => (
  <Page title={title}>
    <DefaultHeader />
    <main className="social-value">
      <SocialValueHeader title={headerTitle} />
      <SocialValueSchemes />
      <SocialValueArticle
        header={articleHeader}
        subHeader={articleSubHeader}
        text={articleText}
        list={articleList}
        lastParagraph={articleLastParagraph}
        imageSrc1={socialValueMainPeople1}
        imageSrc2={socialValueMainPeople1}
        bg="white"
      />
      <SocialValuePartnersImpact>
        <SocialValuePartnersImpact.Header title={impactHeaderTitle} text={impactHeaderText} />
        <SocialValuePartnersImpact.Options title={impactOptionsTitle}>
          {options.map(option => (
            <SocialValuePartnersImpact.Options.Option key={option.id} {...option} />
          ))}
        </SocialValuePartnersImpact.Options>
      </SocialValuePartnersImpact>
      <SocialValueArticle
        header={secondArticleHeader}
        text={secondArticleText}
        imageSrc1={socialValueMainPeople2}
        imageSrc2={socialValueMainPeople2}
        bg="gray"
      />
    </main>
    <Footer />
  </Page>
);

SocialValue.propTypes = {
  title: PropTypes.string,
  headerTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  impactHeaderTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  impactHeaderText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  impactOptionsTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
    }),
  ),
  articleHeader: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  articleSubHeader: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  articleText: PropTypes.string,
  articleList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
    }),
  ),
  articleLastParagraph: PropTypes.string,
  secondArticleHeader: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  secondArticleText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

SocialValue.getInitialProps = () => ({
  title: 'Social value',
  headerTitle: `At Car.service, social value is at the <strong>heart of everything</strong> we do`,
  impactHeaderTitle: `<strong>Impact of our partnerships</strong>`,
  impactHeaderText: `The social value programmes we support have a tangible social impact – and that can be measured; both through the impact on real people, and the taxpayer savings created.`,
  impactOptionsTitle: `In the last three years:`,
  options: [
    {
      id: 1,
      icon: independentLiving,
      value: 180,
      label: 'community groups supported to deliver meals to those in need',
    },
    {
      id: 2,
      icon: rehabilitation,
      value: 11,
      label: 'HMP Academies established, helping to reduce re-offending rates',
    },
    {
      id: 3,
      icon: mealDelivery,
      value: '24',
      label: 'people supported to move into independent living from supported housing',
    },
    {
      id: 4,
      icon: savings,
      value: '£17.3m',
      label: 'savings made to taxpayer-funded services',
    },
  ],
  articleHeader: '<strong>What is social value?</strong>',
  articleSubHeader: 'The way we do business helps local communities',
  articleText:
    '<p>As our business grows, so does the impact we have society. We’ve made a commitment to support a series of organisations and initiatives that assist people in need – and in doing so, Car.service helps to create substantial savings; either for local and national government or for community groups or individuals. <br /><br /> We work alongside charities that:</p>',
  articleList: [
    {
      id: 1,
      label: 'Redistribute food to support community groups',
    },
    {
      id: 2,
      label: 'Provide employment training in HMP Academies',
    },
    {
      id: 3,
      label: 'Create supported living services for people without homes',
    },
    {
      id: 4,
      label: 'Significantly reduce crime and reoffending rates',
    },
  ],
  articleLastParagraph:
    '<p>To date, the charities and organisations we work with have saved taxpayer-funded services in excess of £17m – and, with support from us, they’re on track to increase that figure by another £10m. We’re not just inspired by the impressive numbers though; we’re proud to work alongside people whose lives have been positively impacted by these programmes – whether that’s in those partner charities, or in the communities in which we do business.</p>',
  secondArticleHeader: '<strong>You help us make a difference</strong>',
  secondArticleText:
    '<p>Here in the UK, it’s estimated that nearly 900,000 children go to bed hungry - before waking up and starting their school day without breakfast. Last year, our partner food redistribution charity delivered 945,238 meals – and many of those meals were served in school breakfast clubs, giving children the energy and focus they need to learn, helping them toward a life without hunger.<br /><br />Around the country, services designed to prevent crime are under unbelievable strain – and around 63% of offenders go on to re-offend. With the right training and rehabilitation schemes, our partners have proved that re-offending rates can drop as low as 5%. By giving meaningful options to individuals who may have previously had very few, the organisations we support help to put people’s lives back on track – and prevent the impact of crime on the wider society.<br /><br />Last year, official figures suggested that the number of people with no permanent place to live increased by another 4% - raising the number to over 320,000. Many housing charities say the real figure could be much higher. Our partner supported living charity doesn’t just help people to get a roof over their head; they provide the support and training needed to make sure those people can manage their own tenancy, organise their own bills, make a home, and take back control of their lives.<br /><br />We know we can’t solve all these problems alone, but when you use Car.service, you’re not just contributing to figures; you’re helping to make meaningful and lasting changes in the lives of real people in communities just like your own.',
});

export default SocialValue;
