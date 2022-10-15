import React from 'react';
import PropTypes from 'prop-types';

const EditProfilePopup = ({ title, description, children }) => (
  <>
    <header className="base-confirmation-popup__header-block">
      {title && <h2 className="edit-confirmation-popup__title" dangerouslySetInnerHTML={{ __html: title }} />}
      {description && (
        <div className="edit-confirmation-popup__description" dangerouslySetInnerHTML={{ __html: description }} />
      )}
    </header>
    <div className="edit-confirmation-popup__diving-line" />
    {children}
  </>
);

EditProfilePopup.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};

EditProfilePopup.defaultProps = {
  title: '',
  description: '',
};

export default EditProfilePopup;
