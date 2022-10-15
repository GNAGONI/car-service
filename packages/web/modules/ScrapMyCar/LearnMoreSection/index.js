import React from 'react';
import { Row } from 'react-bootstrap';
import { iconCarMakesSvgMultiple, howItWorks, carScrapping } from 'static/images/icons';
import LearnMoreItem from './LearnMoreItem';

const learnMoreItems = [
  {
    id: 1,
    title: '<strong>Nationwide</strong><br />car scrapping',
    imageSource: carScrapping,
  },
  {
    id: 2,
    title: 'How it<br /><strong>works</strong>',
    imageSource: howItWorks,
  },
  {
    id: 3,
    title: ' We scrap<br /><strong>all car makes</strong>',
    imageSource: iconCarMakesSvgMultiple,
  },
];

const LearnMoreSection = () => (
  <section className="content section-features bg-before-info scrap-my-car-learn-more-section">
    <Row className="wrap">
      {learnMoreItems.map(({ id, title, imageSource }) => (
        <LearnMoreItem key={id} title={title} imageSource={imageSource} />
      ))}
    </Row>
  </section>
);

export default LearnMoreSection;
