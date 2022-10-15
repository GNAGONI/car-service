import React from 'react';
import PropTypes from 'prop-types';

const EditProfileHeader = ({ title, description }) => (
  <header className="page-header">
    {title && <h2 className="text-small page-header__title" dangerouslySetInnerHTML={{ __html: title }} />}
    {description && <div className="page-header__description" dangerouslySetInnerHTML={{ __html: description }} />}
  </header>
);

EditProfileHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default EditProfileHeader;
