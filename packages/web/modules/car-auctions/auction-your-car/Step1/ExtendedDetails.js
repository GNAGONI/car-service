import React from 'react';
import PropTypes from 'prop-types';

import client from '@car-service/api-client';

import FormGroupWrapper from 'components/form/FormGroupWrapper';
import SelectFormGroup from 'components/form/SelectFormGroup';
import DatePickerFormGroup from 'components/form/DatePickerFormGroup';

import { createOptions } from 'modules/car-auctions/auction-your-car/Step1/helpers';

const ExtendedDetails = ({
  isFindDetailsSectionOpened,
  values,
  errors,
  touched,
  setFieldValue,
  setFieldTouched,
  vehicleMakeOptions,
  vehicleModelOptions,
  vehicleVariantOptions,
  vehicleDerivativeOptions,
  bodyTypeOptions,
  transmissionOptions,
  fuelTypeOptions,
  colourOptions,
  changeOptions,
  toggleDetails,
}) => {
  const getSelectValues = async (carMakeId, carModelId, carVarientId, carDerivativeId) => {
    try {
      return await client.vehicles.getAvailableOptions(carMakeId, carModelId, carVarientId, carDerivativeId);
    } catch (e) {
      console.log(e);
      return {};
    }
  };

  const onChangeVehicleMake = async (name, value) => {
    const newValues = { ...values, [name]: value };
    const { vehicleMake } = newValues;
    const carMakeId = vehicleMake.value;
    const { vehicleModels } = await getSelectValues(carMakeId);
    const newVehicleModelOptions = vehicleModels && createOptions('', '', vehicleModels);

    if (newVehicleModelOptions) {
      setFieldValue('vehicleModel', '');
      setFieldValue('varient', '');
      setFieldValue('derivative', '');
      setFieldValue('bodyType', '');
      setFieldValue('transmission', '');
      setFieldValue('fuelType', '');
      setFieldValue('colour', '');
      changeOptions({
        vehicleModelOptions: newVehicleModelOptions,
        vehicleVariantOptions: [],
        vehicleDerivativeOptions: [],
        bodyTypeOptions: [],
        transmissionOptions: [],
        fuelTypeOptions: [],
      });
      toggleDetails();
    }
  };

  const onChangeVehicleModel = async (name, value) => {
    const newValues = { ...values, [name]: value };
    const { vehicleMake, vehicleModel } = newValues;

    const carMakeId = vehicleMake.value;
    const carModelId = vehicleModel.value;

    const { vehicleVarients } = await getSelectValues(carMakeId, carModelId);

    const newVehicleVariantOptions = vehicleVarients && createOptions('', '', vehicleVarients);

    if (newVehicleVariantOptions) {
      setFieldValue('varient', '');
      setFieldValue('derivative', '');
      setFieldValue('bodyType', '');
      setFieldValue('transmission', '');
      setFieldValue('fuelType', '');
      setFieldValue('colour', '');
      changeOptions({
        vehicleVariantOptions: newVehicleVariantOptions,
        vehicleDerivativeOptions: [],
        bodyTypeOptions: [],
        transmissionOptions: [],
        fuelTypeOptions: [],
      });
      toggleDetails();
    }
  };

  const onChangeVarient = async (name, value) => {
    const newValues = { ...values, [name]: value };
    const { vehicleMake, vehicleModel, varient } = newValues;

    const carMakeId = vehicleMake.value;
    const carModelId = vehicleModel.value;
    const carVarientId = varient.value;

    const { vehicleDerivatives } = await getSelectValues(carMakeId, carModelId, carVarientId);

    const newVehicleDerivativeOptions = vehicleDerivatives && createOptions('', '', vehicleDerivatives);

    if (newVehicleDerivativeOptions) {
      setFieldValue('derivative', '');
      setFieldValue('bodyType', '');
      setFieldValue('transmission', '');
      setFieldValue('fuelType', '');
      setFieldValue('colour', '');
      changeOptions({
        vehicleDerivativeOptions: newVehicleDerivativeOptions,
        bodyTypeOptions: [],
        transmissionOptions: [],
        fuelTypeOptions: [],
      });
      toggleDetails();
    }
  };

  const onChangeDerivative = async (name, value) => {
    const newValues = { ...values, [name]: value };
    const { vehicleMake, vehicleModel, varient, derivative } = newValues;

    const carMakeId = vehicleMake.value;
    const carModelId = vehicleModel.value;
    const carVarientId = varient.value;
    const carDerivativeId = derivative.value;

    try {
      const {
        derivativeDetails: { bodyType, transmission, engineFuel },
      } = await getSelectValues(carMakeId, carModelId, carVarientId, carDerivativeId);

      const newBodyTypeOptions = bodyType && createOptions(bodyType, bodyType);
      const newTransmissionOptions = transmission && createOptions(transmission, transmission);
      const newFuelTypeOptions = engineFuel && createOptions(engineFuel, engineFuel);

      setFieldValue('bodyType', '');
      setFieldValue('transmission', '');
      setFieldValue('fuelType', '');
      setFieldValue('colour', '');

      changeOptions({
        bodyTypeOptions: newBodyTypeOptions,
        transmissionOptions: newTransmissionOptions,
        fuelTypeOptions: newFuelTypeOptions,
      });
      toggleDetails();
    } catch (e) {
      console.error(e);
    }
  };

  return isFindDetailsSectionOpened ? (
    <>
      <div className="form-block">
        <FormGroupWrapper
          label="Vehicle make"
          toolTipTitle="Vehicle make"
          toolTipDescription=" Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euismod tincidunt ut laoreet
                dolorea am erat ipsum dolor sit amet, consectetuer adipiscing ."
        >
          <SelectFormGroup
            options={vehicleMakeOptions}
            name="vehicleMake"
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
            stylesTheme="longAuction"
            currentOption={values.vehicleMake}
            error={touched.vehicleMake && errors.vehicleMake}
            onChange={onChangeVehicleMake}
            isDisabled
          />
        </FormGroupWrapper>

        <FormGroupWrapper
          label="Vehicle model"
          toolTipTitle="Vehicle model"
          toolTipDescription=" Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euismod tincidunt ut laoreet
                dolorea am erat ipsum dolor sit amet, consectetuer adipiscing ."
        >
          <SelectFormGroup
            options={vehicleModelOptions}
            name="vehicleModel"
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
            stylesTheme="longAuction"
            currentOption={values.vehicleModel}
            error={touched.vehicleModel && errors.vehicleModel}
            onChange={onChangeVehicleModel}
            isDisabled
          />
        </FormGroupWrapper>

        <FormGroupWrapper
          label="Varient"
          toolTipTitle="Varient"
          toolTipDescription=" Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euismod tincidunt ut laoreet
                dolorea am erat ipsum dolor sit amet, consectetuer adipiscing ."
        >
          <SelectFormGroup
            options={vehicleVariantOptions}
            name="varient"
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
            stylesTheme="longAuction"
            currentOption={values.varient}
            error={touched.varient && errors.varient}
            onChange={onChangeVarient}
          />
        </FormGroupWrapper>
        {/*

          // TODO: Integrate with back-end when Trim will be implemented

          <FormGroupWrapper
            label="Trim"
            toolTipTitle="Trim"
            toolTipDescription=" Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euismod tincidunt ut laoreet
                  dolorea am erat ipsum dolor sit amet, consectetuer adipiscing ."
          >
            <SelectFormGroup
              options={[]}
              name="trim"
              setFieldValue={setFieldValue}
              setFieldTouched={setFieldTouched}
              stylesTheme="longAuction"
              currentOption={values.trim}
              error={touched.trim && errors.trim}
            />
          </FormGroupWrapper> */}

        <FormGroupWrapper
          label="Derivative"
          toolTipTitle="Derivative"
          toolTipDescription=" Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euismod tincidunt ut laoreet
                dolorea am erat ipsum dolor sit amet, consectetuer adipiscing ."
        >
          <SelectFormGroup
            options={vehicleDerivativeOptions}
            name="derivative"
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
            stylesTheme="longAuction"
            currentOption={values.derivative}
            error={touched.derivative && errors.derivative}
            onChange={onChangeDerivative}
          />
        </FormGroupWrapper>
      </div>
      <div className="form-block">
        <div className="head text-center">
          <h3>
            If the vehicle details below are not quite right, please select the correct derivative from above the list
          </h3>
        </div>

        <FormGroupWrapper
          label="Body type"
          toolTipTitle="Body type"
          toolTipDescription=" Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euismod tincidunt ut laoreet
                dolorea am erat ipsum dolor sit amet, consectetuer adipiscing ."
        >
          <SelectFormGroup
            options={bodyTypeOptions}
            name="bodyType"
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
            stylesTheme="longAuction"
            currentOption={values.bodyType}
            error={touched.bodyType && errors.bodyType}
          />
        </FormGroupWrapper>

        <FormGroupWrapper
          label="Transmission"
          toolTipTitle="Transmission"
          toolTipDescription=" Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euismod tincidunt ut laoreet
                dolorea am erat ipsum dolor sit amet, consectetuer adipiscing ."
        >
          <SelectFormGroup
            options={transmissionOptions}
            name="transmission"
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
            stylesTheme="longAuction"
            currentOption={values.transmission}
            error={touched.transmission && errors.transmission}
          />
        </FormGroupWrapper>

        <FormGroupWrapper
          label="Fuel Type"
          toolTipTitle="Fuel Type"
          toolTipDescription=" Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euismod tincidunt ut laoreet
                dolorea am erat ipsum dolor sit amet, consectetuer adipiscing ."
        >
          <SelectFormGroup
            options={fuelTypeOptions}
            name="fuelType"
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
            stylesTheme="longAuction"
            currentOption={values.fuelType}
            error={touched.fuelType && errors.fuelType}
          />
        </FormGroupWrapper>

        <FormGroupWrapper
          label="Colour"
          toolTipTitle="Colour"
          toolTipDescription=" Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euismod tincidunt ut laoreet
                dolorea am erat ipsum dolor sit amet, consectetuer adipiscing ."
        >
          <SelectFormGroup
            options={colourOptions}
            name="colour"
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
            stylesTheme="longAuction"
            currentOption={values.colour}
            error={touched.colour && errors.colour}
          />
        </FormGroupWrapper>

        <FormGroupWrapper
          label="Date of first registration"
          toolTipTitle="Date of first registration"
          toolTipDescription=" Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euismod tincidunt ut laoreet
                dolorea am erat ipsum dolor sit amet, consectetuer adipiscing ."
        >
          <DatePickerFormGroup
            placeholder="Select a Date"
            name="dateOfFirstRegistration"
            value={values.dateOfFirstRegistration}
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
            onChangeDate={() => {}}
            error={touched.dateOfFirstRegistration && errors.dateOfFirstRegistration}
            maxDate={new Date()}
          />
        </FormGroupWrapper>
      </div>
    </>
  ) : null;
};

ExtendedDetails.propTypes = {
  isFindDetailsSectionOpened: PropTypes.bool,
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  vehicleMakeOptions: PropTypes.array,
  vehicleModelOptions: PropTypes.array,
  vehicleVariantOptions: PropTypes.array,
  vehicleDerivativeOptions: PropTypes.array,
  bodyTypeOptions: PropTypes.array,
  transmissionOptions: PropTypes.array,
  fuelTypeOptions: PropTypes.array,
  colourOptions: PropTypes.array,
  toggleDetails: PropTypes.func,
  changeOptions: PropTypes.func,
};

ExtendedDetails.defaultProps = {
  isFindDetailsSectionOpened: false,
  vehicleMakeOptions: [],
  vehicleModelOptions: [],
  vehicleVariantOptions: [],
  vehicleDerivativeOptions: [],
  bodyTypeOptions: [],
  transmissionOptions: [],
  fuelTypeOptions: [],
  colourOptions: [],
  toggleDetails: () => {},
  changeOptions: () => {},
};

export default ExtendedDetails;
