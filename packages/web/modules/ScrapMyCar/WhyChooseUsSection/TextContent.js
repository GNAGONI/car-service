import React from 'react';
import PropTypes from 'prop-types';

const TextContent = ({ title, subTitle, content }) => (
  <>
    <header className="section-head">
      {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
      <div className="text-box">{subTitle && <p dangerouslySetInnerHTML={{ __html: subTitle }} />}</div>
    </header>
    {content && <div className="content-column two-cols" dangerouslySetInnerHTML={{ __html: content }} />}
  </>
);

TextContent.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  content: PropTypes.string,
};

TextContent.defaultProps = {
  title: '',
  subTitle: '',
  content: '',
};

export default TextContent;
