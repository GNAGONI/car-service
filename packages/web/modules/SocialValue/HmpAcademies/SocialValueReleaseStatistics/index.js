import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

import SocialValueReleaseStatisticsHeader from './SocialValueReleaseStatisticsHeader';
import SocialValueReleaseStatisticsOptions from './SocialValueReleaseStatisticsOptions';

const SocialValueReleaseStatistics = ({ children }) => (
  <div className="release-statistics">
    <Container>{children}</Container>
  </div>
);

SocialValueReleaseStatistics.Header = SocialValueReleaseStatisticsHeader;
SocialValueReleaseStatistics.Options = SocialValueReleaseStatisticsOptions;

SocialValueReleaseStatistics.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default SocialValueReleaseStatistics;
