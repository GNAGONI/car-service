import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'server/pages';
import Button from 'react-bootstrap/Button';

// Constants
import { iconVehiclesSvg } from 'static/images/icons';

const AwaitingCollectionListItem = item => {
  const { id, imgUrl, carMake, carModel, year, currentMaxBid, locationFar, location } = item;

  const detailsLink = {
    pathname: '/my-account/awaiting-collection/collection-details',
    query: { id },
  };

  return (
    <Fragment key={id}>
      <div className="row__item live-list__item">
        <div className="product__detail">
          <div className="product-image">
            {imgUrl ? (
              <Link route={detailsLink}>
                <a>
                  <img className="img-fluid" src={imgUrl} alt="awaiting collection" />
                </a>
              </Link>
            ) : (
              <div className="awaiting-box">
                <img className="img-fluid" src={iconVehiclesSvg} alt="awaiting collection" />
                <span className="awaiting-text">Awaiting Image</span>
              </div>
            )}
          </div>

          <div className="text-holder">
            <Link route={detailsLink}>
              <a>
                {year} {carMake} <br /> {carModel}
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="row__item live-list__item live-list__item-pl">
        <div className="price">£{currentMaxBid}</div>
      </div>
      <div className="row__item live-list__item live-list__item-pl">
        <address>
          {location} <span className="text-count">({locationFar})</span>
        </address>
      </div>
      <div className="row__item live-list__item live-list__item-pl">
        <Link route={detailsLink}>
          <Button variant="success">View details</Button>
        </Link>
      </div>
    </Fragment>
  );
};

AwaitingCollectionListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    carMake: PropTypes.string,
    carModel: PropTypes.string,
    numberOfBids: PropTypes.number,
    currentMaxBid: PropTypes.string,
    timeToEnd: PropTypes.number,
    watched: PropTypes.bool,
    imgUrl: PropTypes.string,
    year: PropTypes.number,
    location: PropTypes.string,
    locationFar: PropTypes.string,
  }),
};

export default AwaitingCollectionListItem;
