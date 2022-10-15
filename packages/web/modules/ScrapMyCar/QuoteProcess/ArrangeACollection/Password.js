import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import PasswordInputGroup from 'components/form/PasswordInputGroup';
import FormGroupHead from 'components/form/FormGroupHead';

const Password = ({ handleChange, handleBlur, values, errors, touched }) => (
  <div className="form-box">
    <FormGroupHead
      title={`<strong>Create a password for your account</strong>`}
      description="Please create a password for your account. This will allow you to continue with your quote, manage your collection, get in touch with the Car.service team, and download your paperwork."
    />
    <div className="form-block">
      <Form.Group>
        <PasswordInputGroup
          id="password"
          value={values.password}
          name="password"
          placeholder="Password"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={touched.password && errors.password}
        />
      </Form.Group>
    </div>
  </div>
);

Password.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
};

export default Password;
