import React from 'react';
import PropTypes from 'prop-types';

const FormGroupHead = ({ title, description }) => (
  <div className="head">
    {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
    {description && <p dangerouslySetInnerHTML={{ __html: description }} />}
  </div>
);

FormGroupHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

FormGroupHead.defaultProps = {
  title: '',
  description: '',
};

export default FormGroupHead;
