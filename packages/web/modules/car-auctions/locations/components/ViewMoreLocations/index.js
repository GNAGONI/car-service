import React, { useState } from 'react';
import { Tab, Button, Collapse, Nav } from 'react-bootstrap';

import { LOCATIONS_TYPE } from 'constants/api-types';
import NavItem from './NavItem';
import TabPanel from './TabPanel';

const ViewMoreLocations = ({ locations }) => {
  if (!locations || !Array.isArray(locations)) {
    return null;
  }

  const [open, toggleCollapse] = useState(false);

  const handleToggleCollapse = () => {
    toggleCollapse(!open);
  };

  const navitems = locations.map(({ id, title: name }) => ({ id, name }));
  const tabPanels = locations.map(({ id, title: name, cities }) => ({ id, cities, name }));
  const defaultActiveKey = locations[0]?.id;

  return (
    <>
      <Collapse in={open}>
        <div className="personalise-locations text-center">
          <h2>Other locations</h2>
          <div className="tabs-area text-left">
            <Tab.Container defaultActiveKey={defaultActiveKey}>
              <Nav className="nav-tabs flex-column">{navitems.map(NavItem)}</Nav>
              <Tab.Content>{tabPanels.map(TabPanel)}</Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </Collapse>
      <div className="btn-block text-center">
        <Button onClick={handleToggleCollapse} className="btn-locations">
          <div>
            <strong className="less">View {open ? 'less' : 'more'} locations</strong>
            <i className="icon-chevron-down" />
          </div>
        </Button>
      </div>
    </>
  );
};

ViewMoreLocations.propTypes = {
  locations: LOCATIONS_TYPE,
};

export default ViewMoreLocations;
