import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Form, ButtonGroup, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import { searchSchema } from '@car-service/common/locations';

const LocationsSearch = ({ searchLocation, getCurrentLocation }) => (
  <Formik onSubmit={searchLocation} validationSchema={searchSchema}>
    {({ handleSubmit, values, touched, handleChange, errors }) => (
      <Form noValidate onSubmit={handleSubmit} inline className={cn({ 'has-error': errors.location })}>
        <Form.Group>
          <i role="button" tabIndex="-1" className="icon-finder" onClick={getCurrentLocation} onKeyUp={() => {}} />
          <Form.Control
            type="search"
            name="location"
            placeholder="Current location"
            value={values.location}
            onChange={handleChange}
            isValid={touched.location && !errors.location}
          />
          <Form.Control.Feedback type="invalid">{errors.location}</Form.Control.Feedback>
        </Form.Group>
        <ButtonGroup>
          <Button type="submit">Search</Button>
        </ButtonGroup>
      </Form>
    )}
  </Formik>
);

LocationsSearch.propTypes = {
  getCurrentLocation: PropTypes.func,
  searchLocation: PropTypes.func,
};

export default LocationsSearch;
