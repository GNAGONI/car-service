import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'server/pages';

const FormHeader = ({ title, description, linkText }) => (
  <div className="form-header-section pb-4 pt-4">
    {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
    {description && (
      <div className="form-header-section__description">
        <span>{description}</span>
        {linkText && (
          <Link route="/sign-in">
            <a className="register__link">{linkText}</a>
          </Link>
        )}
      </div>
    )}
  </div>
);

FormHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkText: PropTypes.string,
};

export default FormHeader;
