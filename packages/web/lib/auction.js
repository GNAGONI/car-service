export const makeFilterOptions = filters =>
  (Array.isArray(filters) &&
    filters.map(item => {
      const [filterName, numberOfItems] = Object.values(item);

      return {
        label: filterName,
        value: filterName,
        numberOfItems,
      };
    })) ||
  [];

export const mapOptionsToValues = options => Array.isArray(options) && options.map(option => option.value);

export const checkFilter = filter => (filter && [filter]) || '';
