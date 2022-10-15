import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import ContentBlock from './ContentBlock';

const ImportantInformationSection = ({
  title,
  firstSection,
  secondSection,
  thirdSection,
  fourthSection,
  fifthSection,
  schedule,
}) => (
  <Col>
    <section className="content section-info bg-before-default important-information-section">
      <Row>
        <Col className="pr-0">
          <header className="section-head section-head__smaller">
            {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
          </header>
          <Row className="content-block pt-0 flex-md-row">
            <Col md={6} className="left-section-wrapper">
              <ContentBlock {...firstSection} />
            </Col>
            <Col md={6} className="pr-0 right-section-wrapper">
              <ContentBlock {...thirdSection} schedule={schedule} />
            </Col>
          </Row>
          <Row className="content-block pt-0 flex-md-row">
            <Col md={6} className="left-section-wrapper">
              <ContentBlock {...secondSection} />
            </Col>
            <Col md={6} className="pr-0 right-section-wrapper">
              <ContentBlock {...fourthSection} />
              <ContentBlock {...fifthSection} />
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  </Col>
);

ImportantInformationSection.propTypes = {
  title: PropTypes.string.isRequired,
  firstSection: PropTypes.object.isRequired,
  secondSection: PropTypes.object.isRequired,
  thirdSection: PropTypes.object.isRequired,
  fourthSection: PropTypes.object.isRequired,
  fifthSection: PropTypes.object.isRequired,
  schedule: PropTypes.array,
};

export default ImportantInformationSection;
