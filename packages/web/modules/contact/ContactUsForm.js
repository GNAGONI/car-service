import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { Button, ButtonGroup, Form, Row, Container } from 'react-bootstrap';

import { contactUsSchema, contactUsValues } from '@car-service/common/user';
import { setContactUsEnquiryRequest } from '@car-service/redux/actions';
import InputFormGroup from 'components/form/InputFormGroup';
import FormGroupWrapper from 'components/form/FormGroupWrapper';
import TextAreaFormGroup from 'components/form/TextAreaFormGroup';
import ContactUsHeader from './ContactUsHeader';

const ContactUsForm = ({ formTitle, formSubtitle }) => {
  const dispatch = useDispatch();

  const handleSubmitForm = (data, formikBag) => dispatch(setContactUsEnquiryRequest(data, formikBag));

  return (
    <div className="contact-us-form">
      <ContactUsHeader title={formTitle} subtitle={formSubtitle} />
      <Formik
        enableReinitialize
        initialValues={contactUsValues}
        validationSchema={contactUsSchema}
        onSubmit={handleSubmitForm}
        render={({ values, errors, touched, handleBlur, handleChange, handleSubmit, isValid, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Row className="content-frame contact-us-form-bottom-row">
              <Container fluid className="content-area-contacts layout-p-0">
                <FormGroupWrapper label={null} id="firstandlastname">
                  <InputFormGroup
                    id="firstName"
                    value={values.firstName}
                    name="firstName"
                    placeholder="First name"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    valid={touched.firstName && !errors.firstName}
                    error={touched.firstName && errors.firstName}
                  />
                  <InputFormGroup
                    id="lastName"
                    value={values.lastName}
                    name="lastName"
                    placeholder="Last name"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    valid={touched.lastName && !errors.lastName}
                    error={touched.lastName && errors.lastName}
                  />
                </FormGroupWrapper>
              </Container>
            </Row>
            <Row className="content-frame contact-us-form-bottom-row input-group-bottom">
              <Container fluid className="content-area-contacts layout-p-0">
                <FormGroupWrapper label={null} id="emailandnumber">
                  <InputFormGroup
                    id="contactNumber"
                    value={values.contactNumber}
                    name="contactNumber"
                    placeholder="Contact number"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    valid={touched.contactNumber && !errors.contactNumber}
                    error={touched.contactNumber && errors.contactNumber}
                  />
                  <InputFormGroup
                    id="email"
                    value={values.email}
                    name="email"
                    placeholder="Email"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    valid={touched.email && !errors.email}
                    error={touched.email && errors.email}
                  />
                </FormGroupWrapper>
              </Container>
            </Row>
            <div className="contact-us-textarea">
              <Container fluid className="layout-p-0">
                <TextAreaFormGroup
                  id="enquiry"
                  placeholder="Please write your enquiry here"
                  name="enquiry"
                  value={values.enquiry}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  error={touched.enquiry && errors.enquiry}
                />
              </Container>
            </div>
            <ButtonGroup className="flex-column text-center btn-block mt-3 contact-us-button">
              <Button
                variant="primary"
                size="m"
                type="submit"
                className="pl-5 pr-5"
                disabled={!isValid || isSubmitting}
              >
                <strong>Submit enquiry</strong>
              </Button>
            </ButtonGroup>
          </Form>
        )}
      />
    </div>
  );
};

ContactUsForm.propTypes = {
  formTitle: PropTypes.string,
  formSubtitle: PropTypes.string,
};

ContactUsForm.defaultProps = {
  formTitle: 'Would you like to get in touch with <strong>our expert team</strong> here at Car.service?',
  formSubtitle:
    'Whether you’re looking for unbeatable prices, or you’d just like to clarify some small print, we’re always happy to help.',
};

export default ContactUsForm;
