import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

import SocialValueOurProgrammeArticle from './SocialValueOurProgrammeArticle';

const SocialValueOurProgramme = ({ title, description, articleItems }) => (
  <section className="social-value__our-programme">
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
        <div className="wrap d-flex flex-column flex-md-row flex-wrap">
          {articleItems.map(item => (
            <SocialValueOurProgrammeArticle
              key={`${item?.title}${item?.icon}`}
              title={item?.title}
              description={item?.description}
              icon={item?.icon}
            />
          ))}
        </div>
      ) : null}
    </Container>
  </section>
);

SocialValueOurProgramme.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  articleItems: PropTypes.array,
};

export default SocialValueOurProgramme;
