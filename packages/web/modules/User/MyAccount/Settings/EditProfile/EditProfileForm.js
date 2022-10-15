import React from 'react';
import PropsTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { Button, ButtonGroup, Col, Form } from 'react-bootstrap';

import { editProfileSchema } from '@car-service/common/user';
import InputFormGroup from 'components/form/InputFormGroup';
import FormCheckbox from 'components/form/FormCheckbox';
import SelectFormGroup from 'components/form/SelectFormGroup';
import { editProfileRequest } from '@car-service/redux/actions';
import { getInitialEditProfileFormValues, getDataForBirth } from 'lib/forms';

function EditProfileForm({ checkBoxText }) {
  const dispatch = useDispatch();

  const initialEditProfileFormValues = getInitialEditProfileFormValues();

  const { dayData, monthData, yearData } = getDataForBirth();

  const saveChanges = (
    { firstName, lastName, email, phoneNumber, year, month, day, subscribed },
    { setErrors, setSubmitting },
  ) => {
    const dateOfBirth = `${year.value}-${month.value}-${day.value}`;

    const subscribedStatus = subscribed ? 1 : 0;

    const data = {
      firstName,
      lastName,
      email,
      phoneNumber,
      dateOfBirth,
      subscribed: subscribedStatus,
    };

    dispatch(editProfileRequest(data, { setErrors, setSubmitting }));
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialEditProfileFormValues}
      validationSchema={editProfileSchema}
      onSubmit={saveChanges}
      render={({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        touched,
        errors,
        isValid,
        isSubmitting,
        setFieldValue,
        setFieldTouched,
      }) => (
        <Form noValidate onSubmit={handleSubmit} className="page-form">
          <Form.Row className="mt-3">
            <Form.Group as={Col}>
              <Form.Label className="page-form__field label">First name</Form.Label>
              <InputFormGroup
                id="firstName"
                rounded
                validationMarks
                value={values.firstName}
                name="firstName"
                placeholder="First name"
                handleChange={handleChange}
                handleBlur={handleBlur}
                valid={touched.firstName && !errors.firstName}
                error={touched.firstName && errors.firstName}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row className="mt-3">
            <Form.Group as={Col}>
              <Form.Label className="page-form__field label">Last name</Form.Label>
              <InputFormGroup
                id="lastName"
                rounded
                validationMarks
                value={values.lastName}
                name="lastName"
                placeholder="Last name"
                handleChange={handleChange}
                handleBlur={handleBlur}
                valid={touched.lastName && !errors.lastName}
                error={touched.lastName && errors.lastName}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row className="mt-3">
            <Form.Group as={Col}>
              <Form.Label className="page-form__field label">Email</Form.Label>
              <InputFormGroup
                id="email"
                rounded
                validationMarks
                value={values.email}
                name="email"
                placeholder="Email"
                handleChange={handleChange}
                handleBlur={handleBlur}
                valid={touched.email && !errors.email}
                error={touched.email && errors.email}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row className="mt-3">
            <Form.Group as={Col}>
              <Form.Label className="page-form__field label">Mobile phone number</Form.Label>
              <InputFormGroup
                id="phoneNumber"
                rounded
                validationMarks
                value={values.phoneNumber}
                name="phoneNumber"
                placeholder="Mobile phone number"
                handleChange={handleChange}
                handleBlur={handleBlur}
                valid={touched.phoneNumber && !errors.phoneNumber}
                error={touched.phoneNumber && errors.phoneNumber}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row className="mt-3">
            <Form.Group as={Col}>
              <Form.Label className="page-form__field label">Date of birth</Form.Label>
              <div className="page-form__select-group">
                <SelectFormGroup
                  options={dayData}
                  name="day"
                  placeholder="Day"
                  setFieldValue={setFieldValue}
                  setFieldTouched={setFieldTouched}
                  stylesTheme="editProfileDateTheme"
                  currentOption={values.day}
                  error={touched.day && errors.day}
                />
                <SelectFormGroup
                  options={monthData}
                  name="month"
                  placeholder="Month"
                  setFieldValue={setFieldValue}
                  setFieldTouched={setFieldTouched}
                  stylesTheme="editProfileDateTheme"
                  currentOption={values.month}
                  error={touched.month && errors.month}
                />
                <SelectFormGroup
                  options={yearData}
                  name="year"
                  placeholder="Year"
                  setFieldValue={setFieldValue}
                  setFieldTouched={setFieldTouched}
                  stylesTheme="editProfileDateTheme"
                  currentOption={values.year}
                  error={touched.year && errors.year}
                />
              </div>
            </Form.Group>
          </Form.Row>
          <Form.Row className="mt-3">
            <Form.Group as={Col}>
              <FormCheckbox
                checked={values.subscribed}
                name="subscribed"
                handleChange={handleChange}
                id="editProfileCheckbox"
              >
                {checkBoxText}
              </FormCheckbox>
            </Form.Group>
          </Form.Row>
          <ButtonGroup className="flex-column text-center btn-block mt-3">
            <Button disabled={isSubmitting || !isValid} variant="primary" type="submit" className="pl-6 pr-6 btn-lg">
              <strong>Save changes</strong>
            </Button>
          </ButtonGroup>
        </Form>
      )}
    />
  );
}

EditProfileForm.propTypes = {
  checkBoxText: PropsTypes.string.isRequired,
};

export default React.memo(EditProfileForm);
