import React from 'react';
import PropTypes from 'prop-types';

const ChangePasswordHeader = ({ title, description }) => (
  <header className="section-head text-center">
    <h2 className="text-small change-password-form__header__title" dangerouslySetInnerHTML={{ __html: title }} />
    <div className="text-center change-password-form__header__description" dangerouslySetInnerHTML={{ __html: description }} />
  </header>
);

ChangePasswordHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ChangePasswordHeader;
