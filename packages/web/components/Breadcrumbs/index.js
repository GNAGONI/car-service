import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';

import { capitalize } from 'lib/formatters';
import BreadcrumbItem from './BreadcrumbItem';

const Breadcrumbs = ({ breadcrumbs, router: { asPath } }) => {
  // getting array of all parent paths
  const routesItems = asPath.split('/').slice(1);
  // breadcrumb item with link to root should be always shown
  let breadcrumbsItems = [{ link: '/', name: 'Home', active: routesItems.length === 0 }];

  // if breadcrumbs not explicitly set, we parsing URL and making them out of it
  if (breadcrumbs.length === 0) {
    routesItems.forEach((value, index) => {
      const isLast = index + 1 === routesItems.length;
      const link = `/${routesItems.slice(0, index + 1).join('/')}`; // making link by concatenating previous routes items with current one
      const name = capitalize(value.split(/[-]/).join(' ')); // formatting kebab-case to Capitalized Case
      const active = isLast; // if current breadcrumb item is the last one, then it should be active
      breadcrumbsItems.push({ link, name, active });
    });
  } else {
    breadcrumbsItems = breadcrumbsItems.concat(breadcrumbs);
  }

  return (
    <nav className="nav-breadcrumb" aria-label="breadcrumbs">
      <ol className="breadcrumb">{breadcrumbsItems.map(BreadcrumbItem)}</ol>
    </nav>
  );
};

Breadcrumbs.propTypes = {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string,
      active: PropTypes.bool,
    }),
  ),
  router: PropTypes.shape({
    asPath: PropTypes.string,
  }),
};

Breadcrumbs.defaultProps = {
  router: {
    asPath: '',
  },
  breadcrumbs: [],
};

export default withRouter(Breadcrumbs);
