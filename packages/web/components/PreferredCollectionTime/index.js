import React from 'react';
import PropTypes from 'prop-types';
import { ButtonToolbar, ToggleButtonGroup } from 'react-bootstrap';

// Components
import PreferredCollectionTimeItem from 'components/PreferredCollectionTime/PreferredCollectionTimeItem';

// Styles
import './styles.scss';

const PreferredCollectionTime = ({ preferredCollectionTime }) => (
  <ButtonToolbar className="preferred-collection-time">
    <ToggleButtonGroup
      type="radio"
      name="options"
      defaultValue={preferredCollectionTime.length ? preferredCollectionTime[1] : null}
    >
      {preferredCollectionTime?.map(time => <PreferredCollectionTimeItem timeInSeconds={time} />)}
    </ToggleButtonGroup>
  </ButtonToolbar>
);

PreferredCollectionTime.propTypes = {
  preferredCollectionTime: PropTypes.arrayOf(PropTypes.number),
};

PreferredCollectionTime.defaultProps = {
  preferredCollectionTime: [],
};

export default PreferredCollectionTime;
