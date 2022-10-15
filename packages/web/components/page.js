import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

const Page = ({ title, description, children }) => (
  <div>
    <Head>
      <title>{title || 'Car.service'}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={description || 'Important decisions&nbsp made easier with our handy tools'} />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    </Head>
    {children}
  </div>
);

Page.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

Page.defaultProps = {
  title: null,
  description: null,
};

export default Page;
