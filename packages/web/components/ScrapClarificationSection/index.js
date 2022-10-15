import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

import ScrapClarificationItem from './ScrapClarificationItem';

const ScrapClarificationSection = ({ title, text, clarificationItems }) => (
  <Container className="scrap-clarification-section">
    <header className="section-head text-center large">
      {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
      {text && (
        <div className="text-box">
          <p dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      )}
    </header>
    {clarificationItems?.length ? (
      <div className="d-flex flex-column flex-md-row flex-wrap">
        {clarificationItems.map(item => (
          <ScrapClarificationItem key={`${item?.title}${item?.icon}`} title={item?.title} icon={item?.icon} />
        ))}
      </div>
    ) : null}
  </Container>
);

ScrapClarificationSection.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  clarificationItems: PropTypes.array,
};

ScrapClarificationSection.defaultProps = {
  clarificationItems: [],
};

export default ScrapClarificationSection;
