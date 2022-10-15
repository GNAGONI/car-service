import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Breadcrumbs from 'components/Breadcrumbs';
import PageHeader from 'components/PageHeader';
import {
  schemeResidentialProgramme1,
  schemeResidentialProgramme2,
  schemeHMPAcademies1,
  schemeHMPAcademies2,
  schemeFoodReDistribution1,
  schemeFoodReDistribution2,
} from 'static/images';
import SocialValueSchemesArticle from '../components/SocialValueSchemesArticle';

const BREADCRUMBS = [
  {
    name: 'Social value',
    link: '/social-value',
  },
];

const SocialValueSchemes = () => (
  <Container className="social-value-schemes__container">
    <div className="bg-before-light">
      <Breadcrumbs breadcrumbs={BREADCRUMBS} />
      <Row>
        <Col className="social-value-schemes">
          <PageHeader
            headerTitle={`<strong>How are we creating social value?</strong>`}
            headerText="Car.service doesn’t just help customers to find the best deals for their motoring needs – we operate in a way that makes a real difference to people’s lives."
          />
          <Row className="wrap">
            <SocialValueSchemesArticle
              title={`<strong>Residential</strong><br />programme`}
              imageSrc1={schemeResidentialProgramme1}
              imageSrc2={schemeResidentialProgramme2}
              route="/social-value/residential-programme"
            />
            <SocialValueSchemesArticle
              title={`<strong>HMP</strong><br />Academies`}
              imageSrc1={schemeHMPAcademies1}
              imageSrc2={schemeHMPAcademies2}
              route="/social-value/hmp-academies"
            />
            <SocialValueSchemesArticle
              title={`<strong>Food</strong><br />Re-distribution`}
              imageSrc1={schemeFoodReDistribution1}
              imageSrc2={schemeFoodReDistribution2}
              route="/social-value/food-re-distribution"
            />
          </Row>
        </Col>
      </Row>
    </div>
  </Container>
);

export default SocialValueSchemes;
