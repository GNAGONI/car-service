import React from 'react';
import PropTypes from 'prop-types';

const SocialValueHowItWorksArticle = ({ header, text }) => (
  <header className="section-head text-center large how-it-works-head-article">
    {header && <h2 dangerouslySetInnerHTML={{ __html: header }} />}
    {text && (
      <div className="text-box">
        <p dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    )}
  </header>
);

SocialValueHowItWorksArticle.propTypes = {
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default SocialValueHowItWorksArticle;
