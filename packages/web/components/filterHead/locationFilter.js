import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changePostcodeFilter as changePostcodeFilterAction } from '@car-service/redux/actions';
import { POSTCODE_VALIDATION } from 'constants/postcodeValidation';

const LocationFilter = ({ postcodeFilter, changePostcodeFilterHandler }) => {
  const [postcode, changePostcodeFilter] = useState('');
  const [postCodeError, setPostCodeError] = useState('');
  const [isLocationDetailsOpened, setLocationDetailsOpened] = useState(false);

  const handleChangePostcodeFilter = e => changePostcodeFilter(e.target.value);

  const handleUpdateButtonClick = () => {
    if (POSTCODE_VALIDATION.test(postcode)) {
      changePostcodeFilterHandler(postcode);
      handleLocationDetailsClick();
    } else {
      setPostCodeError('Invalid postcode');
    }
  };
  const handleLocationDetailsClick = () => setLocationDetailsOpened(!isLocationDetailsOpened);

  useEffect(() => {
    changePostcodeFilter(postcodeFilter);
  }, [postcodeFilter]);

  return (
    <div className="location">
      <span role="button" tabIndex="-1" className="subtitle" onClick={handleLocationDetailsClick} onKeyUp={() => {}}>
        Location: &nbsp;
        <a className="opener">{postcodeFilter}</a>
      </span>
      {isLocationDetailsOpened && (
        <div className="location-details">
          <strong className="title">Update your location</strong>
          <div className="form-inline">
            <div className="form-group">
              <div className="input-group">
                <input type="text" className="form-control" value={postcode} onChange={handleChangePostcodeFilter} />
              </div>
              {postCodeError && <div className="invalid">{postCodeError}</div>}
            </div>
            <div className="btn-block">
              <button type="button" className="btn btn-primary" onClick={handleUpdateButtonClick}>
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

LocationFilter.propTypes = {
  postcodeFilter: PropTypes.string,
  changePostcodeFilterHandler: PropTypes.func.isRequired,
};

LocationFilter.defaultProps = {
  postcodeFilter: '',
};

export default connect(
  null,
  dispatch => ({
    changePostcodeFilterHandler: postcode => dispatch(changePostcodeFilterAction(postcode)),
  }),
)(LocationFilter);
