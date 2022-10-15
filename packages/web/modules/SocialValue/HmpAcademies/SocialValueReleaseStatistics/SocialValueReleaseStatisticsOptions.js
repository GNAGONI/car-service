import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';
import SocialValueReleaseStatisticsOption from './SocialValueReleaseStatisticsOption';

const SocialValueReleaseStatisticsOptions = ({ children }) => <Row>{children}</Row>;

SocialValueReleaseStatisticsOptions.Option = SocialValueReleaseStatisticsOption;

SocialValueReleaseStatisticsOptions.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default SocialValueReleaseStatisticsOptions;
