import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import DashboardItem from './DashboardItem';

const Dashboard = ({ centered, image, title, description, children, colNum, imageProps }) => (
  <section className="welcome-block container">
    {centered && (
      <Row className="flex-row justify-content-center default-header text-center">
        <Col md={10} lg={8}>
          <div dangerouslySetInnerHTML={{ __html: title }} />
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </Col>
      </Row>
    )}
    {!centered && (
      <Row className="mt-3 mb-4 pb-4 border-bottom">
        <Col md={2} className="img-section">
          <img src={image} alt="Scrap my car" {...imageProps} />
        </Col>
        <Col md={10} className="align-text-left default-header">
          <div dangerouslySetInnerHTML={{ __html: title }} />
          <div dangerouslySetInnerHTML={{ __html: description }} className="welcome-block-description" />
        </Col>
      </Row>
    )}
    <div className={`dashboard-wrap dashboard-col-${colNum} d-flex flex-row flex-wrap`}>{children}</div>
  </section>
);

Dashboard.propTypes = {
  centered: PropTypes.bool,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
  colNum: PropTypes.number,
  imageProps: PropTypes.shape({
    width: PropTypes.oneOfType(PropTypes.string, PropTypes.number),
    height: PropTypes.string,
  }),
};

Dashboard.defaultProps = {
  centered: true,
  image: '',
  title: '',
  description: '',
  children: [],
  colNum: 4,
  imageProps: {
    width: 90,
    height: 'auto',
  },
};

Dashboard.Item = DashboardItem;

export default Dashboard;
