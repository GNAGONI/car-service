import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DetailDescription extends Component {
  static propTypes = {
    bodyworkCondition: PropTypes.string,
    interiorCondition: PropTypes.string,
    exterior: PropTypes.arrayOf(PropTypes.string),
    interior: PropTypes.arrayOf(PropTypes.string),
    safetyFeatures: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    bodyworkCondition: '',
    interiorCondition: '',
    exterior: [],
    interior: [],
    safetyFeatures: [],
  };

  render() {
    const { bodyworkCondition, interiorCondition, exterior, interior, safetyFeatures } = this.props;

    return (
      <div className="detail-description info-box">
        <ul className="description-list">
          <li>
            <span className="detail-title">Bodywork condition</span>
            <p>{bodyworkCondition}</p>
          </li>
          <li>
            <span className="detail-title">Interior condition</span>
            <p>{interiorCondition}</p>
          </li>
          <li>
            <span className="detail-title">Exterior</span>
            <p>{exterior.join(', ')}</p>
          </li>
        </ul>
        <ul className="description-list">
          <li>
            <span className="detail-title">Interior</span>
            <p>{interior.join(', ')}</p>
          </li>
          <li>
            <span className="detail-title">Safety features</span>
            <p>{safetyFeatures.join(', ')}</p>
          </li>
        </ul>
      </div>
    );
  }
}
