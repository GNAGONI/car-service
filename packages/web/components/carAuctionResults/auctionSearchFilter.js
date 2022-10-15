import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import 'rc-slider/assets/index.css';

import Select from 'components/carAuctionResults/select/select';
import Range from 'components/carAuctionResults/range/range';
import SectionHeader from 'components/sectionHeader';
import { makeFilterOptions } from 'lib/auction';
import { FILTER_PLACEHOLDERS, FILTER_VALUE_NAMES } from 'constants/auction';

const sharedSelectProps = {
  isMulti: true,
  isSearchable: true,
  hideSelectedOptions: false,
  closeMenuOnSelect: false,
  backspaceRemovesValue: false,
};

export default class AuctionSearchFilter extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    carMakeFilterValues: PropTypes.arrayOf(PropTypes.shape).isRequired,
    carModelFilterValues: PropTypes.arrayOf(PropTypes.shape).isRequired,
    modelYearFilterValues: PropTypes.arrayOf(PropTypes.shape).isRequired,
    colorFilterValue: PropTypes.arrayOf(PropTypes.shape).isRequired,
    mileageFilterValue: PropTypes.arrayOf(PropTypes.shape).isRequired,
    TransmissionFilterValue: PropTypes.arrayOf(PropTypes.shape).isRequired,
    fuelFilterValue: PropTypes.arrayOf(PropTypes.shape).isRequired,

    availableCarMakeFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
    availableCarModelFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
    availableModelYearFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
    availableColorFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
    availableMileageFilters: PropTypes.arrayOf(PropTypes.string),
    availableTransmissionFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
    availableFuelFilters: PropTypes.arrayOf(PropTypes.string).isRequired,

    handleMileageFilterChange: PropTypes.func.isRequired,
    handleMileageFilterAfterChange: PropTypes.func.isRequired,
    handleFilterChange: PropTypes.func.isRequired,

    onChangeCarMakeFilter: PropTypes.func.isRequired,
    onChangeCarModelFilter: PropTypes.func.isRequired,
    onChangeModelYearFilter: PropTypes.func.isRequired,
    onChangeColorFilter: PropTypes.func.isRequired,
    onChangeMileageFilter: PropTypes.func.isRequired,
    onChangeTransmissionFilter: PropTypes.func.isRequired,
    onChangeFuelFilter: PropTypes.func.isRequired,

    hideFilters: PropTypes.shape({
      carMake: PropTypes.bool,
      carModel: PropTypes.bool,
      carModelYear: PropTypes.bool,
      carColour: PropTypes.bool,
      carTransmission: PropTypes.bool,
      carFuel: PropTypes.bool,
      carMileage: PropTypes.bool,
    }),
  };

  static defaultProps = {
    availableMileageFilters: {
      minMileage: 0,
      maxMileage: 0,
    },
    hideFilters: {
      carMake: false,
      carModel: false,
      carModelYear: false,
      carColour: false,
      carTransmission: false,
      carFuel: false,
      carMileage: false,
    },
  };

  makeFilterOptions = filters =>
    (Array.isArray(filters) &&
      filters.map(item => {
        const [filterName, numberOfItems] = Object.values(item);

        return {
          label: filterName,
          value: filterName,
          numberOfItems,
        };
      })) ||
    [];

  render() {
    const {
      carMakeFilterValues,
      carModelFilterValues,
      modelYearFilterValues,
      colorFilterValue,
      mileageFilterValue,
      TransmissionFilterValue,
      fuelFilterValue,

      availableCarMakeFilters,
      availableCarModelFilters,
      availableModelYearFilters,
      availableColorFilters,
      availableMileageFilters,
      availableTransmissionFilters,
      availableFuelFilters,

      handleMileageFilterChange,
      handleMileageFilterAfterChange,

      handleFilterChange,
      onChangeCarMakeFilter,
      onChangeCarModelFilter,
      onChangeModelYearFilter,
      onChangeColorFilter,
      onChangeTransmissionFilter,
      onChangeFuelFilter,

      title,
      description,
    } = this.props;

    const rangeValue =
      Array.isArray(mileageFilterValue) && mileageFilterValue.length
        ? mileageFilterValue
        : [availableMileageFilters.minMileage, availableMileageFilters.maxMileage];

    const {
      hideFilters: {
        carMake: hideCarMakeFilter,
        carModel: hideCarModelFilter,
        carModelYear: hideCarModelYearFilter,
        carColour: hideCarColourFilter,
        carTransmission: hideCarTransmissionFilter,
        carFuel: hideCarFuelFilter,
        carMileage: hideCarMileage,
      },
    } = this.props;
    return (
      <header className="section-head bg-before-lightest text-center">
        <SectionHeader title={title} subtitle={description} isFilter />
        <Row>
          {!hideCarMakeFilter && (
            <Col xl lg={3} md={3} sm={4} xs={12}>
              <Select
                {...sharedSelectProps}
                value={carMakeFilterValues}
                onChange={options =>
                  handleFilterChange({
                    options,
                    filterValuesName: FILTER_VALUE_NAMES.carMake,
                    onChangeFilter: onChangeCarMakeFilter,
                  })
                }
                options={makeFilterOptions(availableCarMakeFilters)}
                placeholder={FILTER_PLACEHOLDERS.carMake}
              />
            </Col>
          )}
          {!hideCarModelFilter && (
            <Col xl lg={3} md={3} sm={4} xs={12}>
              <Select
                {...sharedSelectProps}
                value={carModelFilterValues}
                onChange={options =>
                  handleFilterChange({
                    options,
                    filterValuesName: FILTER_VALUE_NAMES.carModel,
                    onChangeFilter: onChangeCarModelFilter,
                  })
                }
                options={makeFilterOptions(availableCarModelFilters)}
                placeholder={FILTER_PLACEHOLDERS.carModel}
              />
            </Col>
          )}
          {!hideCarModelYearFilter && (
            <Col xl lg={3} md={3} sm={4} xs={12}>
              <Select
                {...sharedSelectProps}
                value={modelYearFilterValues}
                onChange={options =>
                  handleFilterChange({
                    options,
                    filterValuesName: FILTER_VALUE_NAMES.carModelYear,
                    onChangeFilter: onChangeModelYearFilter,
                  })
                }
                options={makeFilterOptions(availableModelYearFilters)}
                placeholder={FILTER_PLACEHOLDERS.carModelYear}
              />
            </Col>
          )}
          {!hideCarColourFilter && (
            <Col xl lg={3} md={3} sm={4} xs={12}>
              <Select
                {...sharedSelectProps}
                value={colorFilterValue}
                onChange={options =>
                  handleFilterChange({
                    options,
                    filterValuesName: FILTER_VALUE_NAMES.carColour,
                    onChangeFilter: onChangeColorFilter,
                  })
                }
                options={makeFilterOptions(availableColorFilters)}
                placeholder={FILTER_PLACEHOLDERS.carColour}
              />
            </Col>
          )}
          {!hideCarMileage && (
            <Col xl lg={4} md={4} sm={12} xs={12}>
              <Range
                {...sharedSelectProps}
                placeholder={FILTER_PLACEHOLDERS.carMileage}
                rangeDefaultValue={[availableMileageFilters.minMileage, availableMileageFilters.maxMileage]}
                onRangeChange={handleMileageFilterChange}
                onRangeAfterChange={handleMileageFilterAfterChange}
                rangeValue={rangeValue}
                rangeMin={availableMileageFilters.minMileage}
                rangeMax={availableMileageFilters.maxMileage}
              />
            </Col>
          )}
          {!hideCarTransmissionFilter && (
            <Col xl lg={4} md={4} sm={4} xs={12}>
              <Select
                {...sharedSelectProps}
                value={TransmissionFilterValue}
                onChange={options =>
                  handleFilterChange({
                    options,
                    filterValuesName: FILTER_VALUE_NAMES.carTransmission,
                    onChangeFilter: onChangeTransmissionFilter,
                  })
                }
                options={makeFilterOptions(availableTransmissionFilters)}
                placeholder={FILTER_PLACEHOLDERS.carTransmission}
              />
            </Col>
          )}
          {!hideCarFuelFilter && (
            <Col xl lg={4} md={4} sm={4} xs={12}>
              <Select
                {...sharedSelectProps}
                value={fuelFilterValue}
                onChange={options =>
                  handleFilterChange({
                    options,
                    filterValuesName: FILTER_VALUE_NAMES.carFuel,
                    onChangeFilter: onChangeFuelFilter,
                  })
                }
                options={makeFilterOptions(availableFuelFilters)}
                placeholder={FILTER_PLACEHOLDERS.carFuel}
              />
            </Col>
          )}
        </Row>
      </header>
    );
  }
}
