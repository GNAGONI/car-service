import React from 'react';
import { Router } from 'server/pages';
import Breadcrumbs from 'components/Breadcrumbs';

const CarAuctionBreadcrumbs = () => (
  <div className="breadcrumbs-wrapper">
    <div className="pt-3">
      <Breadcrumbs />
    </div>
    <div role="button" tabIndex="-1" className="btn-back--wrapper" onClick={Router.back} onKeyUp={() => {}}>
      <a className="btn-back">
        <span className="d-none d-md-inline">Back to search results</span>
      </a>
    </div>
  </div>
);

export default CarAuctionBreadcrumbs;
