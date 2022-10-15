import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import NavItem from 'components/NavItem';

const Subnav = ({ subnavItems, levelCount, router: { pathname: path } }) => {
  const routesKeys = path.split('/').slice(levelCount - 1);
  const [firstLevelRoute, secondLevelRoute] = routesKeys;

  const emptySecondLevelRoute = '';
  const isCurrentSecondLevelRouteExists = Array.isArray(routesKeys) && routesKeys.length > 1;
  const currentSecondLevelRoute = isCurrentSecondLevelRouteExists ? secondLevelRoute : emptySecondLevelRoute;

  const navigation = subnavItems[firstLevelRoute];

  const getRouteData = routeKey => {
    const { label, link, value } = routeKey;
    const isActive = currentSecondLevelRoute === value;

    return {
      key: value,
      isActive,
      name: label,
      link,
    };
  };

  const showSubnav = Array.isArray(navigation) && navigation.length;

  return showSubnav ? (
    <nav className="subnav bg-before-default">
      <ul>{navigation.map(getRouteData).map(NavItem)}</ul>
    </nav>
  ) : null;
};

Subnav.propTypes = {
  router: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  subnavItems: PropTypes.shape({
    scrapMyCar: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        link: PropTypes.string,
        value: PropTypes.string,
      }),
    ),
  }),
  levelCount: PropTypes.number,
};

Subnav.defaultProps = {
  router: {
    pathname: '',
  },
  subnavItems: {},
  levelCount: 2,
};

export default withRouter(Subnav);
