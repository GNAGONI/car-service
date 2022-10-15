export const createOption = (label = '', value = '') => (label && value ? { label, value } : '');

/**
 * Function concatenate default option and options array and removes default option from options array from param
 *
 * @param {string} defaultOptionLabel - Label for default option
 * @param {string} defaultOptionValue - Value for default option
 * @param {Array} options - array of options
 */
export const createOptions = (defaultOptionLabel, defaultOptionValue, options = []) => {
  const defaultOption = createOption(defaultOptionLabel, defaultOptionValue);
  const formattedOptions = options.map(option =>
    typeof option === 'object' && option.name && option.id
      ? createOption(option.name, option.id)
      : createOption(option, option),
  );
  const uniqueFormattedOptions = formattedOptions.filter(
    option => String(option.value).toLowerCase() !== String(defaultOption.value).toLowerCase(),
  );

  return defaultOption ? [defaultOption, ...uniqueFormattedOptions] : uniqueFormattedOptions;
};
