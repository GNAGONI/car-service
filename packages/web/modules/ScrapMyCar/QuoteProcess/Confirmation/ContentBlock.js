import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Row, Col } from 'react-bootstrap';

const formatTime = time => moment(time, 'hh:mm:ss').format('ha');

const workingSchedule = {
  Monday: '8:00am - 6:00pm',
  Tuesday: '8:00am - 6:00pm',
  Wednesday: '8:00am - 6:00pm',
  Thursday: '8:00am - 6:00pm',
  Friday: '8:00am - 6:00pm',
  Saturday: '8:00am - 12:00pm',
  Sunday: 'Closed',
};

const ContentBlock = ({ title, text, items, schedule }) => (
  <div className="box">
    {title && <h3 dangerouslySetInnerHTML={{ __html: title }} />}
    {text && <div className="content-block__text" dangerouslySetInnerHTML={{ __html: text }} />}
    {items && (
      <ul>
        {items.map(item => (
          <li className="content-block__text" key={`${item}`}>{item}</li>
        ))}
      </ul>
    )}
    {schedule && (
      <ul className="timing-list">
        {Object.entries(workingSchedule).map(([key, value]) => (
          <Row key={key}>
            <Col className="pr-0">{key}</Col>
            <Col className="layout-xs-right pr-0 pl-0">
              <p className="scedule-item">{value}</p>
            </Col>
          </Row>
        ))}
      </ul>
    )}
  </div>
);

ContentBlock.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  items: PropTypes.array,
  schedule: PropTypes.array,
};

ContentBlock.defaultProps = {
  title: '',
  text: '',
  items: '',
  schedule: '',
};

export default ContentBlock;
