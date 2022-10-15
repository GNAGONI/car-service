import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const PageHeader = ({ headerTitle, headerText, isSubHeader, isHighlitedHeader }) => {
  const getContent = () => (
    <>
      <h2
        className={cn('subnav-title', { 'text-strong': isHighlitedHeader })}
        dangerouslySetInnerHTML={{ __html: headerTitle }}
      />
      {headerText && <div className="text-box" dangerouslySetInnerHTML={{ __html: headerText }} />}
    </>
  );

  return isSubHeader ? (
    <div className="section-head text-center">{getContent()}</div>
  ) : (
    <header className="section-head text-center">{getContent()}</header>
  );
};

PageHeader.propTypes = {
  headerTitle: PropTypes.string.isRequired,
  headerText: PropTypes.string,
  isSubHeader: PropTypes.bool,
  isHighlitedHeader: PropTypes.bool,
};

PageHeader.defaultProps = {
  headerText: '',
  isSubHeader: false,
  isHighlitedHeader: false,
};

export default PageHeader;
