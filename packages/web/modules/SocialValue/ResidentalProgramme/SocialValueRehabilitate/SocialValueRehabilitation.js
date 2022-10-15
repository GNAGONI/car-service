import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

import SocialValueRehabilitateArticle from './SocialValueRehabilitationArticle';

const SocialValueRehabilitation = ({ title, description, articleItems }) => (
  <section className="social-value__rehabilitate-section">
    <Container>
      <header className="section-head text-center large">
        {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
        {description && (
          <div className="text-box">
            <p dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        )}
      </header>
      {articleItems?.length ? (
        <div className="wrap d-flex social-value__rehabilitate-section__articles">
          {articleItems.map(item => (
            <SocialValueRehabilitateArticle
              key={`${item?.title}${item?.icon}`}
              title={item?.title}
              description={item?.description}
              definition={item?.definition}
              icon={item?.icon}
            />
          ))}
        </div>
      ) : null}
    </Container>
  </section>
);

SocialValueRehabilitation.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  articleItems: PropTypes.array,
};

export default SocialValueRehabilitation;
