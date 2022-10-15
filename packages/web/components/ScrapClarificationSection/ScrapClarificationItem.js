import React from 'react';
import PropTypes from 'prop-types';

const ScrapClarificationItem = ({ title, icon }) => (
  <article className="box-scrap text-center">
    {title && <h3 dangerouslySetInnerHTML={{ __html: title }} />}
    {icon && (
      <div className="img-thumbnail">
        <img src={icon} alt="Scrap clarification" width="102" height="98" />
      </div>
    )}
  </article>
);

ScrapClarificationItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ScrapClarificationItem;
