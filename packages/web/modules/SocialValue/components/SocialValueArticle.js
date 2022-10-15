import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Container, Row, Col } from 'react-bootstrap';
import { Icon } from 'react-icons-kit';
import { iosCheckmark } from 'react-icons-kit/ionicons/iosCheckmark';

const SocialValuePointArticle = ({ header, subHeader, text, list, lastParagraph, imageSrc1, imageSrc2, bg }) => (
  <section className={cn(`social-value-article`, `social-value-article-${bg}`)}>
    <Container>
      <Row>
        <Col xl={6} lg={6} md={12} sm={12} className="social-value-article-text">
          {header && <h2 dangerouslySetInnerHTML={{ __html: header }} />}
          {subHeader && <h3 dangerouslySetInnerHTML={{ __html: subHeader }} />}
          {text && <article className="social-value-textBlock" dangerouslySetInnerHTML={{ __html: text }} />}
          {Boolean(list?.length) && (
            <ul className="social-value-article-list">
              {list.map(({ id, label }) => (
                <li key={id}>
                  <Icon className="link-without-border" icon={iosCheckmark} size={32} />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          )}
          {list && lastParagraph && (
            <article className="social-value-textBlock" dangerouslySetInnerHTML={{ __html: lastParagraph }} />
          )}
        </Col>
        <Col xl={6} lg={6} md={12} sm={12} className="social-value-article-img">
          <picture>
            <source srcSet={`${imageSrc1} 1x, ${imageSrc2} 2x`} />
            <img src={imageSrc1} alt="Social-value-people" />
          </picture>
        </Col>
      </Row>
    </Container>
  </section>
);

SocialValuePointArticle.propTypes = {
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  subHeader: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    }),
  ),
  lastParagraph: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  imageSrc1: PropTypes.string.isRequired,
  imageSrc2: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
};

export default SocialValuePointArticle;
