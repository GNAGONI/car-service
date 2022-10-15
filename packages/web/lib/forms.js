import { useSelector } from 'react-redux';
import moment from 'moment';
import client from '@car-service/api-client';

import { getAllUserData } from '@car-service/redux/selectors/user';

const MAX_USER_YEARS = 101;
const MINIMUM_USER_YEARS = 18;

export const getInitialEditProfileFormValues = () => {
  let day;
  let month;
  let year;
  const userData = useSelector(getAllUserData);

  const { firstName, lastName, email, phoneNumber, dateOfBirth, subscribed } = userData;

  if (dateOfBirth) {
    const date = moment(dateOfBirth);

    day = { value: date.date() };
    month = { value: date.format('M') };
    year = { value: date.year() };
  } else {
    day = '';
    month = '';
    year = '';
  }

  return {
    firstName: firstName || '',
    lastName: lastName || '',
    email: email || '',
    phoneNumber: phoneNumber || '',
    day,
    month,
    year,
    subscribed: subscribed || false,
  };
};

export const getDataForBirth = () => {
  const now = moment();

  const currentValidYear = now.get('year') - MINIMUM_USER_YEARS;

  const monthArray = moment.months();

  const monthData = monthArray.map(el => ({
    label: el,
    value: moment()
      .month(el)
      .format('M'),
  }));

  const dayData = Array.from({ length: 31 }, (_, i) => ({ label: i + 1, value: i + 1 }));

  const yearData = Array.from({ length: MAX_USER_YEARS }, (_, i) => ({
    label: currentValidYear - i,
    value: currentValidYear - i,
  }));

  return { dayData, monthData, yearData };
};

/**
 * Check if postcode valid
 *
 * @param {postcode} string - postcode
 */
export const isPostCodeValid = async postcode => {
  try {
    return client.postCodes.validate(postcode);
  } catch (e) {
    throw e;
  }
};
