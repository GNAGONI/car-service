import PropTypes from 'prop-types';

export const COLLECTION_DETAILS_TYPE = PropTypes.shape({
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  vrm: PropTypes.string.isRequired,
  vin: PropTypes.string.isRequired,
  address1: PropTypes.string.isRequired,
  address2: PropTypes.string.isRequired,
  postCode: PropTypes.string.isRequired,
  preferredCollectionTime: PropTypes.arrayOf(PropTypes.number).isRequired,
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.instanceOf(Date),
      content: PropTypes.string,
    }),
  ).isRequired,
});

export const PAGE_DATA_FIELDS_TYPE = PropTypes.shape({
  top_block_title: PropTypes.string,
  top_block_description: PropTypes.string,
  bottom_block_title: PropTypes.string,
  bottom_block_description_left: PropTypes.string,
  bottom_block_description_right: PropTypes.string,
  bottom_read_more_block_description_left: PropTypes.string,
  bottom_read_more_block_description_right: PropTypes.string,
});

export const POPULAR_LOCATIONS_TYPE = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
);

export const LOCATIONS_TYPE = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    cities: PropTypes.arrayOf(
      PropTypes.shape({
        depth: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }),
    ),
  }),
);
