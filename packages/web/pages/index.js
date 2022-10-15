import React from 'react';
import PropTypes from 'prop-types';
import Page from 'components/page';
import { DefaultHeader } from 'components/Header';
import Footer from 'components/Footer';

import HomePageIntro from 'modules/homePage/HomePageIntro';
import HomePageSelectAnOption from 'modules/homePage/HomePageSelectAnOption';
import SocialValue from 'modules/SocialValue/components/SocialValueSection';

const MainPage = ({
  homePageIntroTitle,
  homePageIntroText,
  homePageSelectOptionTitle,
  homePageSelectOptionText,
  articleTitle,
  articleSubTitle,
  articleText,
  articleListOptions,
  articleTextSecond,
}) => (
  <Page title="Homepage">
    <div className="homePage">
      <DefaultHeader />
      <HomePageIntro title={homePageIntroTitle} text={homePageIntroText} />
      <HomePageSelectAnOption title={homePageSelectOptionTitle} text={homePageSelectOptionText} />
      <SocialValue
        title={articleTitle}
        subTitle={articleSubTitle}
        textFirst={articleText}
        listOptions={articleListOptions}
        secondText={articleTextSecond}
      />
    </div>
    <Footer />
  </Page>
);

MainPage.propTypes = {
  homePageIntroTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  homePageIntroText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  homePageSelectOptionTitle: PropTypes.string,
  homePageSelectOptionText: PropTypes.string,
  articleTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  articleSubTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  articleText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  articleListOptions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    }),
  ),
  articleTextSecond: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

MainPage.getInitialProps = () => ({
  homePageIntroTitle: '<strong>The best scrap car prices – instantly!</strong>',
  homePageIntroText:
    'With just your reg number and postcode, we’ll instantly return the best prices from our huge network of scrap dealers and specialist dismantlers.',
  homePageSelectOptionTitle: '<strong>The UK’s best motoring services</strong>',
  homePageSelectOptionText:
    'We negotiate the very best prices for everything you need as a driver – then we help you find the perfect deal for you.',
  articleTitle: 'We put <strong>social value</strong> at the centre of everything we do',
  articleSubTitle:
    'Using Car.service to find the best prices for all your motoring needs means we can continue our support of good causes here in the UK.' +
    '<br />' +
    '<br />',
  articleText:
    'We’re passionate about cars and outstanding service – but it’s community charity work that\n' +
    'truly drives us.\n' +
    '<br />' +
    '<br />' +
    'When you use our services, the funds you help us to generate mean we can make significant\n' +
    'contributions to a host of exceptional projects for local people around the country. Those\n' +
    'projects include:',
  articleListOptions: [
    { id: 1, value: 'Food redistribution networks' },
    { id: 2, value: 'HMP Academies and crime reduction programmes' },
    { id: 3, value: 'Supported living homes' },
  ],
  articleTextSecond:
    'We’re confident that our network of motor-industry connections means we’ll always find\n' +
    'the very best deals for you – and you get to know that you’re helping to make a positive\n' +
    'change in other people’s lives.\n' +
    '<br />' +
    '<br />' +
    'You might not usually connect the car industry and community charity work – but we’re\n' +
    'trying hard to change that.',
});

export default MainPage;
