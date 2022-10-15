import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'server/pages';

const ForgotPasswordHeader = ({ title, description, linkText }) => (
  <div className="section-head pb-4 pt-4 text-center">
    {title ? <h2 dangerouslySetInnerHTML={{ __html: title }} /> : null}
    {description && linkText ? (
      <div className="forgot-your-password-header__description">
        <span>{description}</span>
        <Link route="/sign-in">
          <a className="register__link">{linkText}</a>
        </Link>
      </div>
    ) : null}
  </div>
);

ForgotPasswordHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};

export default ForgotPasswordHeader;
