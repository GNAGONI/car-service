import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { Row, Col } from 'react-bootstrap';
import { validationSchemaStep1, initialValues } from '@car-service/common/auctionCreation/step1';

import client from '@car-service/api-client';

import StepHeader from 'components/PageHeader';
import ControlButtons from 'modules/car-auctions/auction-your-car/components/ControlButtons';
import BasicDetails from 'modules/car-auctions/auction-your-car/Step1/BasicDetails';
import ExtendedDetails from 'modules/car-auctions/auction-your-car/Step1/ExtendedDetails';

const headerText =
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euis mod tincidunt ut laoreet dolorea am erat volutpat. Ut wisi enim ad minim veniam,';
const headerTitle = 'Enter the basic details about <br /> the car you want to auction';

const Step1 = ({ nextButtonText, goBack, next, restart }) => {
  const [isFindDetailsSectionOpened, changeIsFindDetailsSectionOpened] = useState(false);
  const [vehicleMake, changeVehicleMakeOptions] = useState([]);
  const [vehicleModel, changeVehicleModelOptions] = useState([]);
  const [vehicleVariant, changeVehicleVariantOptions] = useState([]);
  const [vehicleDerivative, changeVehicleDerivativeOptions] = useState([]);
  const [bodyType, changeBodyTypeOptions] = useState([]);
  const [transmission, changeTransmissionOptions] = useState([]);
  const [fuelType, changeFuelTypeOptions] = useState([]);
  const [colour, changeColourOptions] = useState([]);
  /**
   * Sends data to the API and redirects to the next page
   *
   * @param {object} values - Yup field to compare to
   * @param {function} bag - Formik fields bag
   */

  const handleSubmit = async (values, bag) => {
    bag.setTouched({});
    try {
      await client.longAuctions.updateAuctionOptions(values);
      next(values);
    } catch (e) {
      bag.setSubmitting(false);
      console.error(e);
    }
  };

  const toggleDetails = () => {
    changeIsFindDetailsSectionOpened(true);
  };

  const changeOptions = ({
    vehicleMakeOptions,
    vehicleModelOptions,
    vehicleVariantOptions,
    vehicleDerivativeOptions,
    bodyTypeOptions,
    transmissionOptions,
    fuelTypeOptions,
    colourOptions,
  }) => {
    changeVehicleMakeOptions(vehicleMakeOptions || vehicleMake);
    changeVehicleModelOptions(vehicleModelOptions || vehicleModel);
    changeVehicleVariantOptions(vehicleVariantOptions || vehicleVariant);
    changeVehicleDerivativeOptions(vehicleDerivativeOptions || vehicleDerivative);
    changeBodyTypeOptions(bodyTypeOptions || bodyType);
    changeTransmissionOptions(transmissionOptions || transmission);
    changeFuelTypeOptions(fuelTypeOptions || fuelType);
    changeColourOptions(colourOptions || colour);
  };

  return (
    <>
      <StepHeader headerText={headerText} headerTitle={headerTitle} />
      <Formik
        enableReinitialize={false}
        validationSchema={validationSchemaStep1}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        render={({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          setFieldValue,
          setFieldTouched,
          isSubmitting,
          resetForm,
        }) => (
          <Form>
            <Row className="content-frame">
              <Col md="10" lg="9" xl="8">
                <BasicDetails
                  isFindDetailsSectionOpened={isFindDetailsSectionOpened}
                  values={values}
                  errors={errors}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  touched={touched}
                  setFieldValue={setFieldValue}
                  toggleDetails={toggleDetails}
                  changeOptions={changeOptions}
                />
                <ExtendedDetails
                  isFindDetailsSectionOpened={isFindDetailsSectionOpened}
                  values={values}
                  errors={errors}
                  touched={touched}
                  setFieldValue={setFieldValue}
                  setFieldTouched={setFieldTouched}
                  vehicleMakeOptions={vehicleMake}
                  vehicleModelOptions={vehicleModel}
                  vehicleVariantOptions={vehicleVariant}
                  vehicleDerivativeOptions={vehicleDerivative}
                  bodyTypeOptions={bodyType}
                  transmissionOptions={transmission}
                  fuelTypeOptions={fuelType}
                  colourOptions={colour}
                  toggleDetails={toggleDetails}
                  changeOptions={changeOptions}
                />
              </Col>
            </Row>
            <ControlButtons
              showNextButton={isFindDetailsSectionOpened}
              goBack={goBack}
              nextButtonText={nextButtonText}
              isNextButtonDisabled={isSubmitting}
              isBackButtonHidden
              restart={() => {
                resetForm();
                restart();
                changeIsFindDetailsSectionOpened(false);
              }}
            />
          </Form>
        )}
      />
    </>
  );
};

Step1.propTypes = {
  nextButtonText: PropTypes.string,
  goBack: PropTypes.func,
  next: PropTypes.func,
  restart: PropTypes.func.isRequired,
};

Step1.defaultProps = {
  nextButtonText: '',
  goBack: () => {},
  next: () => {},
};

export default Step1;
