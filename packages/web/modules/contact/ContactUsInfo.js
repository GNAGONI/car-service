import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

const ContactUsInfo = ({ descriptionText, contacts, address, workingSchedule }) => (
  <div className="contact-us">
    <div className="content-area">
      <article>
        <h1 className="contact-us-header">Contacting us</h1>
        <p className="contact-us-description-text">
          <strong>{descriptionText}</strong>
        </p>
      </article>
      <Container fluid className="content-area-contacts layout-p-0">
        <Row>
          <Col>
            <h2>Contact us</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            {contacts.map(({ id, contactType, contactValue }) => (
              <div className="contacts-section" key={id}>
                <h3>{contactType}:</h3>
                <p>{contactValue}</p>
              </div>
            ))}
          </Col>
          <Col className="layout-p-0 layout-xs-right">
            <h3>Address:</h3>
            {address.map(adresPosition => (
              <p key={adresPosition}>{adresPosition}</p>
            ))}
          </Col>
        </Row>
      </Container>
      <Container fluid className="content-area-contacts layout-p-0 ">
        <Row>
          <Col>
            <h2>Opening Times</h2>
          </Col>
        </Row>
        {Object.entries(workingSchedule).map(([key, value]) => (
          <Row key={key}>
            <Col>{key}</Col>
            <Col className="layout-xs-right">
              <p className="scedule-item">{value}</p>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  </div>
);

ContactUsInfo.propTypes = {
  descriptionText: PropTypes.string,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      contactType: PropTypes.string,
      contactValue: PropTypes.string,
    }),
  ),
  address: PropTypes.arrayOf(PropTypes.string),
  workingSchedule: PropTypes.shape({
    id: PropTypes.number,
    day: PropTypes.string,
    time: PropTypes.string,
  }),
};

ContactUsInfo.defaultProps = {
  descriptionText:
    'You can choose how to connect with our team – and we’ll always get back to you as quickly as possible.',
  contacts: [
    {
      id: 2,
      contactType: 'Email',
      contactValue: 'help@car.service',
    },
  ],
  address: ['Gower House', 'United Kingdom'],
  workingSchedule: {
    Monday: '8:00am - 6:00pm',
    Tuesday: '8:00am - 6:00pm',
    Wednesday: '8:00am - 6:00pm',
    Thursday: '8:00am - 6:00pm',
    Friday: '8:00am - 6:00pm',
    Saturday: '8:00am - 12:00pm',
    Sunday: 'Closed',
  },
};

export default ContactUsInfo;
