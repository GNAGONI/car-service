import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { industryModel, socialValue, socialValue2x } from 'static/images';
import { Link } from 'server/pages';

const HOME_PAGE_SOCIAL_VALUE_ALT_IMG = '"Changing the way business is done in the motor industry"';

const HomePageSocialValue = ({ title, subTitle, textFirst, listOptions, secondText }) => (
  <div>
    <section className="content section-model extend bg-before-info">
      <Row>
        <Col sm={12} md={6} lg={6} xl={5} className="content-block social-value-text">
          {title && (
            <div className="section-head">
              <h2 dangerouslySetInnerHTML={{ __html: title }} />
            </div>
          )}
          {subTitle && (
            <div className="text-box">
              <h3 dangerouslySetInnerHTML={{ __html: subTitle }} />
            </div>
          )}
          {textFirst && <p dangerouslySetInnerHTML={{ __html: textFirst }} />}
          <ul>
            {listOptions?.map(({ id, value }) => (
              <li key={id}>
                <strong>{value}</strong>
              </li>
            ))}
          </ul>
          {secondText && <p dangerouslySetInnerHTML={{ __html: secondText }} />}
          <div>
            <Link route="/social-value">
              <a className="btn btn-dark btn-sm">Read more on social value</a>
            </Link>
          </div>
        </Col>
        <Col sm={12} md={6} xl={5} lg={6} className="offset-xl-2 content-block justify-content-end social-value-image">
          <span className="bg-model" />
          <div className="img-area">
            <picture>
              <img src={socialValue2x} alt={HOME_PAGE_SOCIAL_VALUE_ALT_IMG} />
            </picture>
          </div>
        </Col>
      </Row>
    </section>
  </div>
);

HomePageSocialValue.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  textFirst: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  listOptions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    }),
  ),
  secondText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default HomePageSocialValue;
