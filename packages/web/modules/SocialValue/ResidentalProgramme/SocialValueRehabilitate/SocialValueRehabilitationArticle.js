import React from 'react';
import PropTypes from 'prop-types';

const SocialValueRehabilitate = ({ title, description, definition, icon }) => (
  <article className="box-scrap text-center rehabilitate-box">
    {icon && (
      <div className="img-thumbnail">
        <img src={icon} alt="Scrap clarification" width="157" height="157" />
      </div>
    )}
    {title && <h3 className="rehabilitate-article__title" dangerouslySetInnerHTML={{ __html: title }} />}
    {definition && (
      <div>
        <p className="rehabilitate-article__definition" dangerouslySetInnerHTML={{ __html: definition }} />
      </div>
    )}
    {description && (
      <div className="text-box">
        <p className="rehabilitate-article__description" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    )}
  </article>
);

SocialValueRehabilitate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  definition: PropTypes.string,
  icon: PropTypes.string.isRequired,
};

export default SocialValueRehabilitate;
