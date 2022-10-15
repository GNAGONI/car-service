import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const FormGroupWrapper = ({
  label,
  toolTipTitle,
  toolTipDescription,
  id,
  classNames,
  children,
  isLarge,
  hasIcon,
  formNoteTitle,
  formNoteValue,
}) => {
  const [isToolTipVisible, toggleToolTipVisible] = useState(false);

  return (
    <div className="form-row">
      <div
        className={cn('col-12 form-group', { 'form-group-large': isLarge }, { 'has-icon-first': hasIcon }, classNames)}
      >
        {label && <label htmlFor={id} dangerouslySetInnerHTML={{ __html: label }} />}
        <div className="input-wrap">
          {toolTipTitle && toolTipDescription && (
            <div className={cn('popup-pane', { 'popup-active': isToolTipVisible })}>
              <span
                role="button"
                tabIndex="-1"
                onKeyUp={() => {}}
                className="btn-tooltip"
                onClick={() => toggleToolTipVisible(!isToolTipVisible)}
              >
                <span className="sr-only">Info</span>
              </span>
              <div className="popup-tooltip">
                <div className="popup-frame jcf-scrollable">
                  <h4 dangerouslySetInnerHTML={{ __html: toolTipTitle }} />
                  <p dangerouslySetInnerHTML={{ __html: toolTipDescription }} />
                </div>
              </div>
            </div>
          )}
          {children}
        </div>
        {formNoteTitle && (
          <span className="form-note">
            {formNoteTitle}
            {formNoteValue && <span className="text-right">{formNoteValue}</span>}
          </span>
        )}
      </div>
    </div>
  );
};

FormGroupWrapper.propTypes = {
  label: PropTypes.string,
  toolTipTitle: PropTypes.string,
  toolTipDescription: PropTypes.string,
  formNoteTitle: PropTypes.string,
  formNoteValue: PropTypes.string,
  id: PropTypes.string,
  classNames: PropTypes.string,
  children: PropTypes.node.isRequired,
  isLarge: PropTypes.bool,
  hasIcon: PropTypes.bool,
};

FormGroupWrapper.defaultProps = {
  isLarge: false,
  hasIcon: false,
  formNoteTitle: '',
  formNoteValue: '',
};

export default FormGroupWrapper;
