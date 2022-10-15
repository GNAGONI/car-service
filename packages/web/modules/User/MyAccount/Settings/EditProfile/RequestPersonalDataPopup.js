import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonGroup, Col, Form } from 'react-bootstrap';

import { personalDataRequest } from '@car-service/redux/actions';
import { getPersonalDataSelector } from '@car-service/redux/selectors/user';
import InputFormGroup from 'components/form/InputFormGroup';
import { EditProfilePopup } from './components';

const RequestPersonalDataPopup = () => {
  const dispatch = useDispatch();

  const requestPersonalData = () => dispatch(personalDataRequest({ redirect: true }));

  const { firstName, lastName, email } = useSelector(getPersonalDataSelector);

  return (
    <div className="request-personal-data-popup form-bordered">
      <EditProfilePopup title="Make a request for your personal data">
        <h2 className="personal-data-form__title">
          Please make sure your details are correct below and submit the form. We will send you your personal data.
        </h2>
        <Form noValidate className="page-form">
          <Form.Row>
            <Form.Group as={Col}>
              <InputFormGroup id="firstName" rounded value={firstName} disabled />
            </Form.Group>
          </Form.Row>
          <Form.Row className="">
            <Form.Group as={Col}>
              <InputFormGroup id="lastName" rounded value={lastName} disabled />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} className="pb-0">
              <InputFormGroup id="emailAddress" rounded value={email} disabled />
            </Form.Group>
          </Form.Row>
          <ButtonGroup className="personal-data-form__buttons">
            <Button onClick={requestPersonalData} className="personal-data-form__button__primary">
              Submit
            </Button>
          </ButtonGroup>
        </Form>
      </EditProfilePopup>
    </div>
  );
};

export default RequestPersonalDataPopup;
