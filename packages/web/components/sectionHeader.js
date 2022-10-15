import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const SectionHeader = ({ title, subtitle, isFilter }) =>
  (title || subtitle) && (
    <header className={cn('text-center', { 'filter-head': isFilter }, { 'section-head': !isFilter })}>
      {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
      {subtitle && <div className="text-box" dangerouslySetInnerHTML={{ __html: subtitle }} />}
    </header>
  );

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  isFilter: PropTypes.bool,
};

SectionHeader.defaultProps = {
  title: '',
  subtitle: '',
};

export default SectionHeader;
