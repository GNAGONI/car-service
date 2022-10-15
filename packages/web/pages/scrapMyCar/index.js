import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Page from 'components/page';
import { DefaultHeader } from 'components/Header';
import Footer from 'components/Footer';
import Intro from 'modules/ScrapMyCar/Intro';
import Navigation from 'modules/ScrapMyCar/Navigation';
import CarMakeModelSection from 'modules/ScrapMyCar/CarMakeModelSection';
import ScrapWithCarCoSection from 'modules/ScrapMyCar/ScrapWithCarCoSection';
import LearnMoreSection from 'modules/ScrapMyCar/LearnMoreSection';
import ReviewsCarousel from 'components/ReviewsCarousel';
import WhyChooseUsSection from 'modules/ScrapMyCar/WhyChooseUsSection';
import SocialValue from 'modules/SocialValue/components/SocialValueSection';

import PropTypes from 'prop-types';

const introTitle = 'Find an <strong>unbeatable price</strong> for your scrap car';
const introText =
  'Scrapping a car doesn’t have to be hard work! Our UK-wide network of scrap partners and specialist dismantlers means we make it easy to find the very best prices.';
const introFormText = 'Enter your registration &amp; postcode to get an <strong>instant quote</strong>';

const carMakesModelsTitle =
  'Our specialist scrap partners mean we can maximise the value of <strong>every make and model</strong>';
const carMakesModelsText =
  '<h3>Our innovative way of working means we’ll instantly return the best price for your specific car.</h3>';
const carMakesListItems = [
  { label: 'Alfa Romeo', value: 'Alfa Romeo' },
  { label: 'Audi', value: 'Audi' },
  { label: 'BMW', value: 'BMW' },
  { label: 'Citroen', value: 'Citroen' },
  { label: 'Fiat', value: 'Fiat' },
  { label: 'Ford', value: 'Ford' },
  { label: 'Honda', value: 'Honda' },
  { label: 'Hyundai', value: 'Hyundai' },
  { label: 'Jaguar', value: 'Jaguar' },
  { label: 'Jeep', value: 'Jeep' },
  { label: 'Kia', value: 'Kia' },
  { label: 'Mazda', value: 'Mazda' },
  { label: 'Mercedes', value: 'Mercedes' },
  { label: 'MG', value: 'MG' },
  { label: 'MINI', value: 'MINI' },
  { label: 'Mitsubishi', value: 'Mitsubishi' },
  { label: 'Saab', value: 'Saab' },
  { label: 'Skoda', value: 'Skoda' },
  { label: 'Vauxhall', value: 'Vauxhall' },
  { label: 'Volkswagen', value: 'Volkswagen' },
  { label: 'Volvo', value: 'Volvo' },
];

const textContentTitle = 'Why choose <strong>Car.service</strong><br />to get a scrap car quote?';
const textContentSubTitle = '<h3>We don’t just provide top prices; we help with every step</h3>';
const textContentText =
  '<p>Scrapping a car is something that most people do very rarely – that’s why we’ve created a service that provides support and guidance; all the way from quote to collection.' +
  '<br />' +
  '<br />' +
  'Our commitment to providing a simple and straightforward way to scrap your vehicle starts with the prices we provide. Our professional network of scrap dealers and dismantlers is the best in the motor industry – so we can instantly provide quotes that will not be beaten.' +
  '<br />' +
  '<br />' +
  'When we’ve found an excellent price for your scrap car, we’ll help you to arrange a free collection – so the location of your vehicle doesn’t matter, and when the car’s ready to go, we’ll even make sure you’re helped to complete your DVLA paperwork. From start to finish, there’s no easier way to deal with an old or accident damaged vehicle.' +
  '<br />' +
  '<br />' +
  '<br />' +
  '<br />' +
  '<strong>“Do you pay cash for scrap cars?”</strong>' +
  '<br />' +
  '<br />' +
  'The partners we work with do not buy scrap cars for cash – and you should avoid any traders offering cash. Since 2013, paying cash for scrap has been illegal – so buyers that do are breaking the law, and could leave you exposed to legal difficulties.' +
  '<br />' +
  '<br />' +
  'All of our scrap partners are government registered Authorised Treatment Facilities – so you can be sure that they will handle your vehicle correctly – and when it leaves on the back of their recovery vehicle, your responsibility for the car is completely tied up.' +
  '<br />' +
  '<br />' +
  '<strong>“How much is my scrap car worth?”</strong>' +
  '<br />' +
  '<br />' +
  'The value of a scrap car depends on a lot of different factors – including weight, the trim level, and engine type. The good news is, we work with a huge range of specialist dismantlers who often offer more than just scrap value for specific makes and models – so we’re confident our prices won’t be bettered!' +
  '</p>';

const carTypesTitle = 'What kind of cars can we <strong>scrap?</strong>';
const carTypesText = 'The condition of your vehicle doesn’t matter; we’ll provide a great price.';
const carTypesItems = [
  { label: 'Insurance write-offs', value: '' },
  { label: 'Damaged cars', value: '' },
  { label: 'Flood damaged cars', value: '' },
  { label: 'Non-runners', value: '' },
  { label: 'Un-roadworthy cars', value: '' },
  { label: 'MOT failures', value: '' },
  { label: 'Junk and salvage cars', value: '' },
  { label: 'Fleet cars', value: '' },
  { label: 'Part-exchange cars', value: '' },
  { label: 'Foreign cars which are not UK registered', value: '' },
];

const ScrapMyCar = ({ articleTitle, articleSubtitle, articleFirstText, articleItems, articleTextSecond }) => (
  <Page title="Scrap my car">
    <DefaultHeader />
    <Intro title={introTitle} text={introText} formText={introFormText} />
    <main id="main" className="scrap-my-car-page">
      <Container>
        <Row>
          <Col className="scrap-my-car">
            <Navigation />
            <ScrapWithCarCoSection />
          </Col>
        </Row>
      </Container>
      <ReviewsCarousel />
      <Container>
        <Row>
          <Col>
            <LearnMoreSection />
          </Col>
        </Row>
      </Container>
      <div className="scrap-my-car-social-value">
        <Container>
          <Row>
            <Col>
              <SocialValue
                title={articleTitle}
                subTitle={articleSubtitle}
                textFirst={articleFirstText}
                listOptions={articleItems}
                secondText={articleTextSecond}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col>
            <WhyChooseUsSection
              textContentTitle={textContentTitle}
              textContentSubTitle={textContentSubTitle}
              textContentText={textContentText}
              carTypesTitle={carTypesTitle}
              carTypesText={carTypesText}
              carTypesItems={carTypesItems}
            />
            <CarMakeModelSection
              title={carMakesModelsTitle}
              text={carMakesModelsText}
              carMakesListItems={carMakesListItems}
            />
          </Col>
        </Row>
      </Container>
    </main>
    <Footer />
  </Page>
);

ScrapMyCar.propTypes = {
  articleTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  articleSubtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  articleFirstText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  articleItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    }),
  ),
  articleTextSecond: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

ScrapMyCar.getInitialProps = () => ({
  articleTitle: 'How can scrapping your car help us <strong>change people’s lives</strong>?',
  articleSubtitle:
    'At Car.service, we transform scrap vehicles into funding for social value projects' + '<br />' + '<br />',
  articleFirstText:
    'Recycling cars and charity work might not be two things you think go hand-in-hand – but, at Car.service, we’re trying to change that.' +
    '<br />' +
    '<br />' +
    'When you choose our service to find scrap car dealers in any part of the UK – you don’t just get an amazing price – you also get to know that the finances your car will allow us to contribute to:',
  articleItems: [
    {
      id: 1,
      value: 'HMP Academies',
    },
    {
      id: 2,
      value: 'Food redistribution networks',
    },
    {
      id: 3,
      value: 'Assisted living services',
    },
  ],
  articleTextSecond:
    'As well as the people who are directly supported by these initiatives, the positive impact they have on communities spreads far and wide – reducing crime rates, easing the strain on the emergency services, and allowing tax money to be channelled to the areas in which it’s most urgently needed.' +
    '<br />' +
    '<br />' +
    'Together, we can make a real difference to people’s lives and the communities we live in.',
});

export default ScrapMyCar;
