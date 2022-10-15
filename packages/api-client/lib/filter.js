export const checkFiltersArray = filters => (Array.isArray(filters) && filters) || [];
export const checkFiltersArrayWithValue = filters =>
  (Array.isArray(filters) && filters.map(filter => filter.value)) || [];
export const checkFilterString = filter => (typeof filter === 'string' ? filter : undefined);
export const checkFilterNearest = (filter, sortBy) =>
  sortBy === 'nearest' && typeof filter === 'string' ? filter : undefined;
