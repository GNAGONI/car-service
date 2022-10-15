import React from 'react';
import PropTypes from 'prop-types';

import { Table } from 'react-bootstrap';

const VehicleDetails = ({ registration, mileage, vehicleMake, model, variant }) => (
  <Table bsPrefix="table-unbordered">
    <thead>
      <tr>
        <th colSpan={2} className="head">
          Your vehicle details
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="title">Registration:</td>
        <td>{registration || '-'}</td>
      </tr>
      <tr>
        <td className="title">Mileage:</td>
        <td>{mileage || '-'}</td>
      </tr>
      <tr>
        <td className="title">Vehicle make:</td>
        <td>{vehicleMake || '-'}</td>
      </tr>
      <tr>
        <td className="title">Model:</td>
        <td>{model || '-'}</td>
      </tr>
      <tr>
        <td className="title">Variant:</td>
        <td>{variant || '-'}</td>
      </tr>
    </tbody>
  </Table>
);

VehicleDetails.propTypes = {
  registration: PropTypes.string,
  mileage: PropTypes.string,
  vehicleMake: PropTypes.string,
  model: PropTypes.string,
  variant: PropTypes.string,
};

VehicleDetails.propTypes = {
  registration: '',
  mileage: '',
  vehicleMake: '',
  model: '',
  variant: '',
};

export default VehicleDetails;
