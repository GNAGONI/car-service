import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import cn from 'classnames';

const HowItWorksSection = ({ num, images, articleHeader, articleText, sectionColor, dashedRowPosition }) => (
  <main className={cn('hot-it-works-section', sectionColor)}>
    <Row>
      <Col className="img-how-it-works" xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
        <picture>
          <source srcSet={`${images[0]} 1x, ${images[1]} 2x`} />
          <img src={images[1]} alt="Social-value-how-it-works" />
        </picture>
        <div className="radius">
          <span>
            STAGE <span>{num}</span>
          </span>
        </div>
        <div className={cn('img-how-it-works-dashed-row', dashedRowPosition)} />
      </Col>
      <Col className="text-how-it-works" xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
        {articleHeader && <h1 dangerouslySetInnerHTML={{ __html: articleHeader }} />}
        <h3>Stage {num}</h3>
        {articleText && <p dangerouslySetInnerHTML={{ __html: articleText }} />}
      </Col>
    </Row>
  </main>
);

HowItWorksSection.propTypes = {
  num: PropTypes.number,
  images: PropTypes.arrayOf(PropTypes.string),
  articleHeader: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  articleText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  sectionColor: PropTypes.string.isRequired,
  dashedRowPosition: PropTypes.string.isRequired,
};

export default HowItWorksSection;
