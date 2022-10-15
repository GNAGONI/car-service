import React from 'react';
import PropTypes from 'prop-types';
import { ToggleButton } from 'react-bootstrap';
import { formatDateToTime, getDateReadableFormat } from 'lib/formatters';
import './styles.scss';

const PreferredCollectionTimeItem = ({ timeInSeconds }) => {
  const timeInMilliseconds = timeInSeconds * 1000;
  const startDate = new Date(timeInMilliseconds);
  const endDate = new Date(timeInMilliseconds + 1 * 60 * 60 * 1000); // add 1 hours to start date
  const timeRange = `${formatDateToTime(startDate)} - ${formatDateToTime(endDate)}`;
  const date = getDateReadableFormat(startDate);

  return (
    <ToggleButton key={timeInMilliseconds} value={timeInMilliseconds} className="preferred-collection-time__item">
      <p className="preferred-collection-time__item-date">{date}</p>
      <p className="preferred-collection-time__item-time">{timeRange}</p>
    </ToggleButton>
  );
};

PreferredCollectionTimeItem.propTypes = {
  timeInSeconds: PropTypes.number.isRequired,
};

export default PreferredCollectionTimeItem;
