import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'server/pages';
import { Col } from 'react-bootstrap';

const SignInContainer = ({ title, description, withCreateAccount }) => (
  <header className="section-head pb-4 pt-4">
    <Col md={{ span: 10, offset: 1 }}>
      {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
      <div className="text-box">
        {description && <div className="mb-3" dangerouslySetInnerHTML={{ __html: description }} />}
        {withCreateAccount && (
          <span className="text">
            Login in to your account below or&nbsp;
            <Link route="/register/customer">
              <a className="register__link">create a new account</a>
            </Link>
            &nbsp;now
          </span>
        )}
      </div>
    </Col>
  </header>
);

SignInContainer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  withCreateAccount: PropTypes.bool,
};

SignInContainer.defaultProps = {
  title: '',
  description: '',
  withCreateAccount: true,
};

export default SignInContainer;
