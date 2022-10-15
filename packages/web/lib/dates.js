/**
 * Checks if date is weekday (all except Sundays)
 *
 * @param {date} date - date to check
 */
export const isWeekday = date => {
  const day = date.getDay();
  return day !== 0;
};

/**
 * Get week day number by date
 *
 * @param {date} date - date to check
 */
export const getWeekdayNumber = date => new Date(date).getDay();

/**
 * Checks if some date is today
 *
 * @param {date} date - date to check
 */
export const isToday = someDate => {
  const today = new Date();
  return (
    someDate.getDate() === today.getDate() &&
    someDate.getMonth() === today.getMonth() &&
    someDate.getFullYear() === today.getFullYear()
  );
};

/**
 * Get Hours number (0 -23) by date
 *
 * @param {date} date - date to check
 */
export const getHours = date => new Date(date).getUTCHours();

/**
 * Get Current Hour number (0 -23)
 */
export const getCurrentHours = () => new Date().getHours();

/**
 * Increase days in date
 *
 * @param {date} initialDate - date to check
 * @param {number} daysCount - number of days to increase
 */
export const increaseDateDays = (initialDate, daysCount) => {
  const date = initialDate ? new Date(initialDate) : new Date();
  date.setDate(date.getDate() + daysCount);
  return date;
};

/**
 * Increase days in date
 *
 * @param {date} date - date to check
 * @param {number} hoursCount - number of days to increase
 */
export const increaseDateHours = (initialDate, hoursCount) => {
  const date = initialDate ? new Date(initialDate) : new Date();
  const timezoneOffset = date.getTimezoneOffset() / 60;
  date.setHours(date.getHours() + Number(hoursCount) - timezoneOffset);
  return date;
};

/**
 * Drops hours to 0 in time
 *
 * @param {number} time - time to drop its hours
 * @returns {date} date without hours
 */
export const dropHours = time => {
  const date = new Date(time);
  return new Date(date.setHours(0));
};

/**
 * Converts milliseconds to days
 *
 * @param {number} timeInMilliseconds - time in milliseconds
 * @returns {number} time converted in days
 */
export const convertMillisecondsToDays = timeInMilliseconds => timeInMilliseconds / 1000 / 60 / 60 / 24;
