import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import client from '@car-service/api-client';

import FormGroupWrapper from 'components/form/FormGroupWrapper';
import InputFormGroup from 'components/form/InputFormGroup';

import { createOptions } from 'modules/car-auctions/auction-your-car/Step1/helpers';

import { iconGB } from 'static/images/icons';

const BasicDetails = ({
  values,
  setFieldValue,
  toggleDetails,
  handleChange,
  handleBlur,
  errors,
  touched,
  changeOptions,
}) => {
  const getAuctionData = async (registrationNumber, mileage) => {
    try {
      const basicData = await client.longAuctions.findDetails(registrationNumber, mileage);
      const {
        auction: {
          vehicle: {
            vehicleMake,
            vehicleMake: { vehicleMakeId },
            vehicleModel,
            vehicleModel: { vehicleModelId },
            vehicleVarient,
            vehicleVarient: { vehicleVarientId },
            vehicleDerivative,
            bodyType,
            transmission,
            fuelType,
            colour,
            id: vehicleId,
          },
          id: auctionId,
          token,
        },
      } = basicData;

      const [
        { vehicleCarMakes },
        { vehicleModels },
        { vehicleVarients },
        { vehicleDerivatives },
        availableColours,
      ] = await Promise.all([
        client.vehicles.getAvailableOptions(),
        client.vehicles.getAvailableOptions(vehicleMakeId),
        client.vehicles.getAvailableOptions(vehicleMakeId, vehicleModelId),
        client.vehicles.getAvailableOptions(vehicleMakeId, vehicleModelId, vehicleVarientId),
        client.vehicles.getAvailableColours(),
      ]);

      return {
        vehicleMake,
        vehicleModel,
        vehicleVarient,
        vehicleDerivative,
        bodyType,
        transmission,
        fuelType,
        colour,
        vehicleId,
        auctionId,
        token,
        vehicleCarMakes,
        vehicleModels,
        vehicleVarients,
        vehicleDerivatives,
        availableColours,
      };
    } catch (e) {
      console.error(e);
      return {};
    }
  };

  const findDetails = async () => {
    const { registrationNumber, mileage } = values;
    const {
      vehicleMake,
      vehicleModel,
      vehicleVarient,
      vehicleDerivative,
      bodyType,
      transmission,
      fuelType,
      colour,
      vehicleId,
      auctionId,
      token,
      vehicleCarMakes,
      vehicleModels,
      vehicleVarients,
      vehicleDerivatives,
      availableColours,
    } = await getAuctionData(registrationNumber, mileage);

    if (!(vehicleMake && vehicleModel && vehicleVarient && vehicleDerivative)) {
      return;
    }

    const vehicleMakeOptions = createOptions(vehicleMake.vehicleMakeName, vehicleMake.vehicleMakeId, vehicleCarMakes);
    const vehicleModelOptions = createOptions(
      vehicleModel.vehicleModelName,
      vehicleModel.vehicleModelId,
      vehicleModels,
    );
    const vehicleVariantOptions = createOptions(
      vehicleVarient.vehicleVarientName,
      vehicleVarient.vehicleVarientId,
      vehicleVarients,
    );
    const vehicleDerivativeOptions = createOptions(
      vehicleDerivative.vehicleDerivativeName,
      vehicleDerivative.vehicleDerivativeId,
      vehicleDerivatives,
    );
    const bodyTypeOptions = createOptions(bodyType, bodyType);
    const transmissionOptions = createOptions(transmission, transmission);
    const fuelTypeOptions = createOptions(fuelType, fuelType);
    const colourOptions = createOptions(colour, colour, availableColours);

    setFieldValue('vehicleMake', vehicleMakeOptions[0]);
    setFieldValue('vehicleModel', vehicleModelOptions[0]);
    setFieldValue('varient', vehicleVariantOptions[0]);
    setFieldValue('derivative', vehicleDerivativeOptions[0]);
    setFieldValue('bodyType', bodyTypeOptions[0]);
    setFieldValue('transmission', transmissionOptions[0]);
    setFieldValue('fuelType', fuelTypeOptions[0]);
    setFieldValue('colour', colourOptions[0]);
    setFieldValue('auctionId', auctionId);
    setFieldValue('vehicleId', vehicleId);
    setFieldValue('token', token);

    changeOptions({
      vehicleMakeOptions,
      vehicleModelOptions,
      vehicleVariantOptions,
      vehicleDerivativeOptions,
      bodyTypeOptions,
      transmissionOptions,
      fuelTypeOptions,
      colourOptions,
    });
    toggleDetails();
  };

  const { registrationNumber, mileage } = values;
  const isFindDetailsDisabled = !registrationNumber || !mileage;

  return (
    <div className="form-block">
      <FormGroupWrapper
        label="Registration number:"
        toolTipTitle="Registration number:"
        toolTipDescription=" Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euismod tincidunt ut laoreet
                dolorea am erat ipsum dolor sit amet, consectetuer adipiscing ."
        id="registrationNumber"
        isLarge
        hasIcon
      >
        <InputFormGroup
          id="registration-number"
          value={values.registrationNumber}
          name="registrationNumber"
          placeholder=""
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={touched.registrationNumber && errors.registrationNumber}
          iconImage={iconGB}
        />
      </FormGroupWrapper>
      <FormGroupWrapper
        label="Mileage"
        toolTipTitle="Registration number:"
        toolTipDescription=" Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euismod tincidunt ut laoreet
                dolorea am erat ipsum dolor sit amet, consectetuer adipiscing ."
        id="mileage"
      >
        <InputFormGroup
          id="mileage"
          value={values.mileage}
          name="mileage"
          placeholder=""
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={touched.mileage && errors.mileage}
        />
      </FormGroupWrapper>

      <div className="btn-block text-center">
        <Button variant="dark" onClick={findDetails} disabled={isFindDetailsDisabled}>
          Find details
        </Button>
      </div>
    </div>
  );
};

BasicDetails.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  toggleDetails: PropTypes.func.isRequired,
  changeOptions: PropTypes.func.isRequired,
};

export default BasicDetails;
