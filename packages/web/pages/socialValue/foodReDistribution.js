import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

import Page from 'components/page';
import Breadcrumbs from 'components/Breadcrumbs';
import { DefaultHeader } from 'components/Header';
import Footer from 'components/Footer';
import { SocialValueHeader, SocialValuePartnersImpact, SocialValueArticle } from 'modules/SocialValue/components';
import { independentLiving, rehabilitation, mealDelivery, savings } from 'static/images/icons';
import { foodArticle1, foodArticle2 } from 'static/images';

export const BREADCRUMBS = [
  {
    name: 'Social value',
    link: '/social-value',
  },
  {
    name: 'Food re-distribution',
    link: '/social-value/food-re-distribution',
  },
];

const SocialValueFoodRedistribution = ({
  title,
  headerTitle,
  impactHeaderTitle,
  impactHeaderText,
  impactOptionsTitle,
  options,
  articleHeader,
  articleSubHeader,
  articleText,
  secondArticleHeader,
  secondArticleText,
}) => (
  <Page title={title}>
    <DefaultHeader />
    <main className="social-value social-value-food-re-distribution">
      <SocialValueHeader title={headerTitle} />
      <Container className="bg-before-light breadcrumbs-container">
        <Breadcrumbs breadcrumbs={BREADCRUMBS} />
      </Container>
      <SocialValueArticle
        header={articleHeader}
        subHeader={articleSubHeader}
        text={articleText}
        imageSrc1={foodArticle1}
        imageSrc2={foodArticle1}
        bg="light-gray"
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
        imageSrc1={foodArticle2}
        imageSrc2={foodArticle2}
        bg="gray"
      />
    </main>
    <Footer />
  </Page>
);

SocialValueFoodRedistribution.propTypes = {
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
  secondArticleHeader: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  secondArticleText: PropTypes.string,
};

SocialValueFoodRedistribution.getInitialProps = () => ({
  title: 'Food re-distribution',
  headerTitle: `<strong>Car.service</strong> supports <strong>charitable groups</strong> that provide <strong>quality food for those in need</strong>`,
  impactHeaderTitle: `<strong>Impact of our partnerships</strong>`,
  impactHeaderText: `The food redistribution services that we help to support have a real impact – both for local people and savings for taxpayer-funded services.`,
  impactOptionsTitle: `In the last three years:`,
  options: [
    {
      id: 1,
      icon: independentLiving,
      value: 397,
      label: 'tonnes of good food redirected from landfill each year',
    },
    {
      id: 2,
      icon: rehabilitation,
      value: 180,
      label: 'community groups supported to deliver meals and expand operations',
    },
    {
      id: 3,
      icon: mealDelivery,
      value: '£7,900',
      label: 'average saving that our partner charity’s support has provided each group',
    },
    {
      id: 4,
      icon: savings,
      value: '£3.4m',
      label: 'social value created through reducing food costs for community groups',
    },
  ],
  articleHeader: 'We’re helping to tackle <strong>food poverty</strong> across the UK',
  articleSubHeader: '',
  articleText:
    '<p>When you use Car.service, we’re able to continue our support for charity work that is actively\n' +
    'reducing food poverty and hunger in local communities. This work provides food and\n' +
    'assistance for small organisations and charities – helping them to reduce their running costs\n' +
    'and expand their food redistribution efforts into new areas.\n' +
    '<br />' +
    '<br />' +
    'It’s estimated that poverty affects around 6m people around the country, and for many, this\n' +
    'means going full days without food – and many families are forced to send their children to\n' +
    'school hungry, relying on breakfast clubs and free school meals.\n' +
    '<br />' +
    '<br />' +
    'Our partner charity’s 180 Community Food Members include schools, homeless shelters,\n' +
    'food banks, and hospices – and between them, they deliver over 9,000 meals every week.\n' +
    'Hunger is a big problem for the UK, and we won’t solve the issue ourselves – but every meal\n' +
    'Car.service customers help to create makes a real difference to someone’s life.</p>',
  secondArticleHeader: '<strong>How does food redistribution work?</strong>',
  secondArticleText:
    '<p>Our food redistribution partner is the largest UK charity fighting hunger and food waste –\n' +
    'and they do that by redistributing surplus food to charities that turn it into meals.\n' +
    '<br />' +
    '<br />' +
    'The work starts by finding excess products from the food industry. Fluctuations in sales and\n' +
    'promotions often mean excesses can occur, so everything they source is fresh, in date, and\n' +
    'good to eat. They handle and store a massive range of food, whether it’s kitchen cupboard\n' +
    'essentials or chilled and frozen products. Last year, over 20,000 tonnes of food was sourced\n' +
    'in this way.\n' +
    '<br />' +
    '<br />' +
    'This food is then distributed to regional centres, which then pass that food on to frontline\n' +
    'charities and community groups. As well as providing food for people who may otherwise\n' +
    'go hungry, these groups often provide additional support around a range of complex issues,\n' +
    'helping to make a difference in people’s lives.</p>',
});

export default SocialValueFoodRedistribution;
