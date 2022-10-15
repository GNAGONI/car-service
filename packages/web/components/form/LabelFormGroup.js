import React from 'react';
import PropTypes from 'prop-types';

const LabelFormGroup = ({ label }) => <strong className="label" dangerouslySetInnerHTML={{ __html: label }} />;

LabelFormGroup.propTypes = {
  label: PropTypes.string,
};

LabelFormGroup.defaultProps = {
  label: '',
};

export default LabelFormGroup;
