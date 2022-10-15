import React from 'react';
import PropTypes from 'prop-types';

const ContactUsHeader = ({ title, subtitle }) => (
  <article>
    <h1 className="contact-us-header" dangerouslySetInnerHTML={{ __html: title }} />
    <p dangerouslySetInnerHTML={{ __html: subtitle }} />
  </article>
);

ContactUsHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default ContactUsHeader;
