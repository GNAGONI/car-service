import React from 'react';
import PropTypes from 'prop-types';

const SocialValueOurProgrammeArticle = ({ title, description, icon }) => (
  <article className="box-scrap text-center">
    {icon && (
      <div className="img-thumbnail">
        <img src={icon} alt="Scrap clarification" width="117" height="117" />
      </div>
    )}
    {title && <h3 className="our-programme-article__title" dangerouslySetInnerHTML={{ __html: title }} />}
    {description && (
      <div className="text-box">
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    )}
  </article>
);

SocialValueOurProgrammeArticle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  icon: PropTypes.string.isRequired,
};

export default SocialValueOurProgrammeArticle;
