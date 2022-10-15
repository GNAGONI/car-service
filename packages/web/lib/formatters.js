export const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

export const getParentRoutePath = (fullPath, currentRouteKey) =>
  fullPath.substring(0, fullPath.indexOf(currentRouteKey, 0));

export const formatDateToTime = date => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const daySide = hours >= 12 ? 'pm' : 'am';

  hours %= 12;
  hours = hours || 12;
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${hours}:${minutes} ${daySide}`;
};

export const getDateReadableFormat = dateFormat => {
  const date = new Date(dateFormat);

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
};
