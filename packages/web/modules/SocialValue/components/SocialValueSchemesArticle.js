import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'server/pages';
import { Col } from 'react-bootstrap';

const SocialValueSchemesArticle = ({ title, route, imageSrc1, imageSrc2 }) => (
  <Col md={4} sm={12} className="box-service">
    <div className="box-holder">
      <header className="head">
        {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
        <p>
          <Link route={route}>
            <a className="read-more">Learn more</a>
          </Link>
        </p>
      </header>
      <div className="img-thumbnail">
        <Link route={route}>
          <a>
            <picture>
              <source srcSet={`${imageSrc1} 1x, ${imageSrc2} 2x`} />
              <img src={imageSrc1} width="380" alt="Social-value-article" />
            </picture>
          </a>
        </Link>
      </div>
    </div>
  </Col>
);

SocialValueSchemesArticle.propTypes = {
  title: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  imageSrc1: PropTypes.string.isRequired,
  imageSrc2: PropTypes.string.isRequired,
};

export default SocialValueSchemesArticle;
