import {
  getCurrentHours,
  getHours,
  getWeekdayNumber,
  isToday,
  dropHours,
  convertMillisecondsToDays,
} from 'lib/dates';
export const defaultTimeOptions = [
  { value: '9', label: '9:00 am - 10:00 am' },
  { value: '10', label: '10:00 am - 11:00 am' },
  { value: '11', label: '11:00 am - 12:00 (noon)' },
  { value: '12', label: '12:00 (noon) - 1:00 pm' },
  { value: '13', label: '1:00 pm - 2:00 pm' },
  { value: '14', label: '2:00 pm - 3:00 pm' },
  { value: '15', label: '3:00 pm - 4:00 pm' },
  { value: '16', label: '4:00 pm - 5:00 pm' },
];

export const durationOptions = [{ value: '7d', label: '7 days' }, { value: '9d', label: '9 days' }];

/**
 * Get time options by week day (Sat 8 -12, Mon - Fri  8-17, today - times after current hour)
 *
 * @param {string|number} val - weekday
 */
export const getTimeOptionsByWeekDay = val => {
  if (isToday(val)) {
    const currentHour = getCurrentHours();
    const currentHourIndex = defaultTimeOptions.findIndex(time => +time.value === currentHour);
    return currentHourIndex === -1 ? [] : defaultTimeOptions.slice(currentHourIndex + 1);
  }
  const weekdayNumber = getWeekdayNumber(val);
  if (weekdayNumber === 6) {
    return defaultTimeOptions.slice(0, 3);
  }
  return defaultTimeOptions;
};

/**
 * Function calculates difference between selected preferred date and start date
 * and returns available preferred time options
 *
 * @param {Date} preferredDate - preferred date
 * @param {Date} startDate - start date
 * @param {Object} startTime - start time option (from 9am to 16pm)
 * @returns available preferred time options
 */

export const getPreferredTimeOptions = (preferredDate, startDate, startTime, minTimeDifferenceInDays) => {
  let timeOptions = defaultTimeOptions;
  const weekdayNumber = getWeekdayNumber(preferredDate);
  if (weekdayNumber === 6) {
    timeOptions = timeOptions.slice(0, 3);
  }

  if (startDate) {
    const timeDifference = preferredDate - startDate;
    const timeDifferenceInDays = convertMillisecondsToDays(timeDifference);
    if (timeDifferenceInDays > minTimeDifferenceInDays) {
      return timeOptions;
    }
    const preferredTimeIndex = timeOptions.findIndex(time => Number(time.value) === Number(startTime.value));
    return preferredTimeIndex === -1 ? [] : timeOptions.slice(preferredTimeIndex + 1);
  }
  return timeOptions;
};

export const transferDataFromServer = data => {
  const transferredData = {};

  if (data.startingPrice) {
    transferredData.startingPrice = data.startingPrice;
  }

  if (data.reservePrice) {
    transferredData.reservePrice = data.reservePrice;
  }

  if (data.startDateTime) {
    transferredData.listingStartDate = dropHours(data.startDateTime);
    const hours = getHours(data.startDateTime);
    transferredData.listingStartTime = defaultTimeOptions.find(time => Number(time.value) === Number(hours));
  }

  if (data.collectionTimes?.length) {
    transferredData.preferredCollectionDateTime = data.collectionTimes.map(collectionTime => {
      const hours = getHours(collectionTime);
      return {
        preferredCollectionDate: dropHours(collectionTime),
        preferredCollectionTime: defaultTimeOptions.find(time => Number(time.value) === Number(hours)),
      };
    });
  }

  return transferredData;
};
