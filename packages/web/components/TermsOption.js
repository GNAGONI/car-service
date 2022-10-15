import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import { Link } from 'server/pages';

const TermsOption = ({ icon, link, headerLabel, descriptionLabel }) => (
  <Col xl={4} lg={4} md={6} sm={11} xs={12} className="terms-option">
    <section className="terms-option-content">
      <div>
        <img src={icon} width="80" height="80" alt="TermsIcon" />
      </div>
      {headerLabel && <h3 dangerouslySetInnerHTML={{ __html: headerLabel }} />}
      {descriptionLabel && <p dangerouslySetInnerHTML={{ __html: descriptionLabel }} />}
      <Link route={link}>
        <a className="terms-button terms-button btn btn-primary btn-sm">Find out more</a>
      </Link>
    </section>
  </Col>
);

TermsOption.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  link: PropTypes.string,
  headerLabel: PropTypes.string,
  descriptionLabel: PropTypes.string,
};

export default TermsOption;
