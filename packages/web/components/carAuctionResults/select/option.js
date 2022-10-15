import React from 'react';
import PropTypes from 'prop-types';
import { components } from 'react-select';

const Option = props => {
  const {
    data: { label, numberOfItems },
  } = props;

  return (
    <components.Option {...props}>
      <div>
        {label} ({numberOfItems})
      </div>
    </components.Option>
  );
};

Option.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    numberOfItems: PropTypes.string.isRequired,
  }),
};

Option.defaultTypes = {
  data: {
    label: '',
    numberOfItems: '',
  },
};

export default Option;
