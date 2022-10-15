/**
 * Converts the time format according the mockup view
 *
 * @param {string} timeString - string with time, which can be converted to date object
 * @returns {string} - time string, which is formatted according mockup requirements (f.e. "3rd Feb 1999 @ 14:45 pm")
 */
export const getAuctionStartTime = timeString => {
  if (timeString) {
    const time = new Date(timeString);
    const [month, date, year] = getDateAsArray(time);
    const shortMonth = getShortMonth(month);
    const dateSuffix = getNumberSuffix(date);
    const formattedTime = getFormattedTime(time);
    return `${date}${dateSuffix} ${shortMonth} ${year} @ ${formattedTime}`;
  }
  return '';
};

/**
 * Converts long month name to short format with only 3 first letters of month
 *
 * @param {string} month - month's name
 * @returns {string} - month's short name
 */
export const getShortMonth = month => month.slice(0, 3);

/**
 * Converts time format to HH:MM pm/am
 *
 * @param {date} time - date object to convert
 * @returns {string} - time string in HH:MM pm/am format
 */
export const getFormattedTime = time => {
  if (time && time instanceof Date) {
    const timeOptions = {
      hour: '2-digit',
      minute: '2-digit',
    };

    return time.toLocaleTimeString('en-UK', timeOptions);
  }
  return '';
};

/**
 * Function returns date as array of month, date, year
 *
 * @param {date} time - date object to convert
 * @returns {array} - consists of month, date, year
 */
export const getDateAsArray = time => {
  if (time && time instanceof Date) {
    return time
      .toDateString()
      .split(' ')
      .slice(1);
  }
  return [];
};

/**
 * Function returns suffix for any number
 *
 * @param {number} number - number to get according suffix
 * @returns {string} - one of three suffixes: st, nd, rd
 */
export const getNumberSuffix = number => {
  if (number) {
    const suffixArray = ['st', 'nd', 'rd'];
    const suffixIndex = ((((number + 90) % 100) - 10) % 10) - 1;
    return suffixArray[suffixIndex] || 'th';
  }
  return '';
};

/**
 * Function adds pound sign to the value
 *
 * @param {string} value - value, which should get pound sign
 * @returns {string} - string with pound sign and value
 */
export const addPoundSign = value => (value ? `£${value}` : '');
