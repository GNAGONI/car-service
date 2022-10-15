import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'server/pages';
import { Col } from 'react-bootstrap';
import ErrorAlert from 'components/errorAlert';
import cn from 'classnames';

const ConfirmationOfTerms = ({
  confirmationTitle,
  value,
  name,
  labelText,
  labelLinkText,
  labelLink,
  error,
  setFieldValue,
  isSpaceNeeded,
  secondLabelLink,
  secondLabelLinkText,
}) => (
  <div className={cn({ 'checkboxWrapper-head': isSpaceNeeded })}>
    <div className="form-row confirmation-checkbox">
      <Col md={11}>
        {confirmationTitle && <h3>{confirmationTitle}</h3>}
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input time-checkbox"
            id={name}
            name={name}
            checked={value}
            onChange={() => setFieldValue(name, !value)}
          />
          <label className="custom-control-label" htmlFor={name}>
            <span>
              {labelText}
              {labelLink && (
                <Link route={labelLink}>
                  <a className="register__link">{labelLinkText}</a>
                </Link>
              )}
              {labelLink && secondLabelLink ? ' and ' : null}
              {secondLabelLink && (
                <Link route={secondLabelLink}>
                  <a className="register__link">{secondLabelLinkText}</a>
                </Link>
              )}
            </span>
          </label>
        </div>
      </Col>
    </div>
    {error && <ErrorAlert message={error} />}
  </div>
);

ConfirmationOfTerms.propTypes = {
  setFieldValue: PropTypes.func.isRequired,
  confirmationTitle: PropTypes.string,
  labelText: PropTypes.string,
  labelLinkText: PropTypes.string,
  labelLink: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.bool.isRequired,
  isSpaceNeeded: PropTypes.bool,
  name: PropTypes.string.isRequired,
  secondLabelLink: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  secondLabelLinkText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

ConfirmationOfTerms.defaultProps = {
  confirmationTitle: '',
  labelText: '',
  labelLinkText: '',
  labelLink: '',
  error: '',
  isSpaceNeeded: true,
};

export default ConfirmationOfTerms;
