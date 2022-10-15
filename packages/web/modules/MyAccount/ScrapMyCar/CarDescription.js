import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const CarDescription = ({ name, registrationNumber, postcode, quoteDate, soldDate }) => (
  <div>
    {name && <div className="text-box">{name}</div>}
    {registrationNumber && (
      <div className="text-box">
        Reg number: <span>{registrationNumber.toUpperCase()}</span>
      </div>
    )}
    {postcode && (
      <div className="text-box">
        Post code: <span>{postcode.toUpperCase()}</span>
      </div>
    )}
    {quoteDate && (
      <div className="text-box">
        Quote date: <span>{moment(quoteDate).format('Do MMM YYYY')}</span>
      </div>
    )}
    {soldDate && (
      <div className="text-box">
        Sold date: <span>{moment(soldDate).format('Do MMM YYYY')}</span>
      </div>
    )}
  </div>
);

CarDescription.propTypes = {
  name: PropTypes.string,
  registrationNumber: PropTypes.string,
  postcode: PropTypes.string,
  quoteDate: PropTypes.string,
  soldDate: PropTypes.string,
};

export default CarDescription;
