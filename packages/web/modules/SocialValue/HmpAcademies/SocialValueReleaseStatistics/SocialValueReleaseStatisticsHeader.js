import React from 'react';
import PropTypes from 'prop-types';

const SocialValueReleaseStatisticsHeader = ({ title, text }) => (
  <div className="gratitude__head">
    <header className="section-head">
      {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
      {text && <p dangerouslySetInnerHTML={{ __html: text }} />}
    </header>
  </div>
);

SocialValueReleaseStatisticsHeader.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default SocialValueReleaseStatisticsHeader;
