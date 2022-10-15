import React from 'react';
import { useSelector } from 'react-redux';
import { Row } from 'react-bootstrap';

import { getSchedule, getCarPrice } from '@car-service/redux/selectors/quote';
import BookingConfirmationSection from './BookingConfirmationSection';
import ImportantInformationSection from './ImportantInformationSection';
import { bookingConfirmationSection, importantInformationSection } from './constants';

const Confirmation = () => {
  const schedule = useSelector(getSchedule);
  const price = useSelector(getCarPrice);

  return (
    <Row className="quotation-confirmation">
      <BookingConfirmationSection {...bookingConfirmationSection} price={price} />
      <ImportantInformationSection {...importantInformationSection} schedule={schedule} />
    </Row>
  );
};
export default Confirmation;
