import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  iconCalendar,
  iconColor,
  iconPetrol,
  iconMileage,
  iconTransmission,
  iconKeys,
  iconBothWays,
  iconDocument,
  iconCar5,
  iconFsh,
} from 'static/images/icons';

export default class CarDetails extends PureComponent {
  static propTypes = {
    ABICategoryRecorded: PropTypes.bool,
    FSH: PropTypes.number,
    V5CLogbook: PropTypes.bool,
    colour: PropTypes.string,
    doesStart: PropTypes.bool,
    fuelType: PropTypes.string,
    hasKeys: PropTypes.bool,
    mileage: PropTypes.number,
    productionYear: PropTypes.number,
    transmission: PropTypes.string,
  };

  static defaultProps = {
    ABICategoryRecorded: null,
    FSH: null,
    V5CLogbook: null,
    colour: null,
    doesStart: null,
    fuelType: null,
    hasKeys: null,
    mileage: null,
    productionYear: null,
    transmission: null,
  };

  renderCarDetail = ({ name, imgSrc, value, width, height }) => (
    <li key={name}>
      <span className="icon-wrap">
        <img src={imgSrc} alt={name} width={width} height={height} />
      </span>
      <span className="text">{value}</span>
    </li>
  );

  render() {
    const {
      ABICategoryRecorded,
      FSH,
      V5CLogbook,
      color,
      doesStart,
      fuelType,
      hasKeys,
      mileage,
      productionYear,
      transmission,
    } = this.props;

    const detailsList = [
      {
        name: 'Production Year',
        imgSrc: iconCalendar,
        value: productionYear,
        width: 42,
        height: 42,
      },
      {
        name: 'Color',
        imgSrc: iconColor,
        value: color,
        width: 48,
        height: 47,
      },
      {
        name: 'Fuel Type',
        imgSrc: iconPetrol,
        value: fuelType,
        width: 38,
        height: 47,
      },
      {
        name: 'Mileage',
        imgSrc: iconMileage,
        value: mileage,
        width: 46,
        height: 47,
      },
      {
        name: 'Transmission',
        imgSrc: iconTransmission,
        value: transmission,
        width: 40,
        height: 56,
      },
      {
        name: 'Has Keys',
        imgSrc: iconKeys,
        value: hasKeys ? 'Has Keys' : 'Has not Keys',
        width: 54,
        height: 56,
      },
      {
        name: 'Does Start',
        imgSrc: iconBothWays,
        value: doesStart ? 'Does Start' : 'Does not Start',
        width: 54,
        height: 52,
      },
      {
        name: 'V5C Logbook',
        imgSrc: iconDocument,
        value: V5CLogbook ? 'V5' : 'No V5',
        width: 46,
        height: 44,
      },
      {
        name: 'ABI Category',
        imgSrc: iconCar5,
        value: ABICategoryRecorded ? 'ABI category recorded' : 'ABI category not recorded',
        width: 62,
        height: 29,
      },
      {
        name: 'FSH',
        imgSrc: iconFsh,
        value: FSH ? 'FSH' : 'No FSH',
        width: 36,
        height: 49,
      },
    ];

    return (
      <div className="info-box">
        <h2>Car Details:</h2>
        <ul className="details-list">{detailsList.map(detail => detail.value && this.renderCarDetail(detail))}</ul>
      </div>
    );
  }
}
