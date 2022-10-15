import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import { getAuctionStartTime, addPoundSign } from './helpers';

const AdvertDetails = ({ premiumAdvert, extras, startPrice, reservePrise, startTime }) => (
  <Table bsPrefix="table-unbordered">
    <thead>
      <tr>
        <th colSpan={2} className="head">
          Your advert details
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="title">Premium advert:</td>
        <td>{addPoundSign(premiumAdvert) || '-'}</td>
      </tr>
      <tr>
        <td className="title">Extras:</td>
        <td>{addPoundSign(extras) || '-'}</td>
      </tr>
      <tr>
        <td className="title">Start price:</td>
        <td>{addPoundSign(startPrice) || '-'}</td>
      </tr>
      <tr>
        <td className="title">Reserve price:</td>
        <td>{addPoundSign(reservePrise) || '-'}</td>
      </tr>
      <tr>
        <td className="title">Start time:</td>
        <td>{getAuctionStartTime(startTime) || '-'}</td>
      </tr>
    </tbody>
  </Table>
);

AdvertDetails.propTypes = {
  premiumAdvert: PropTypes.string,
  extras: PropTypes.string,
  startPrice: PropTypes.string,
  reservePrise: PropTypes.string,
  startTime: PropTypes.string,
};

AdvertDetails.propTypes = {
  premiumAdvert: '',
  extras: '',
  startPrice: '',
  reservePrise: '',
  startTime: '',
};

export default AdvertDetails;
