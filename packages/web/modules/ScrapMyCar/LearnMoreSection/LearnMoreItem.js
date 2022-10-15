import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Link } from 'server/pages';
import { Col } from 'react-bootstrap';

const LearnMoreItem = ({ title, link, imageSource }) => (
  <Col md={4} className="box-feature">
    <div className={cn('box-holder', { 'box-holder-empty-link': !link })}>
      <header className="head">
        {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
        {link && (
          <Link route={link}>
            <a className="read-more">Learn more</a>
          </Link>
        )}
      </header>
      {imageSource && (
        <div className="img-thumbnail">
          <img alt="Learn more" height="213" src={imageSource} width="257" />
        </div>
      )}
    </div>
  </Col>
);

LearnMoreItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
};

export default LearnMoreItem;
