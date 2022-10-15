import React, { PureComponent } from 'react';

import { iconStarQ } from 'static/images/icons';

export default class InviteCustomerWidget extends PureComponent {
  render() {
    return (
      <section className="widget invite-widget">
        <span className="price-tag">
          <span className="price">
            Just <br />
            £9.99
          </span>
        </span>

        <div className="widget-header text-center">
          <h3>Invite your customers to leave a review</h3>
          <p>Gain that extra level of trust</p>
        </div>

        <ul className="star-list">
          <li>
            <span className="icon-wrap">
              <img height="41" width="41" src={iconStarQ} alt="description" />
            </span>
          </li>

          <li>
            <span className="icon-wrap">
              <img height="41" width="41" src={iconStarQ} alt="description" />
            </span>
          </li>

          <li>
            <span className="icon-wrap">
              <img height="41" width="41" src={iconStarQ} alt="description" />
            </span>
          </li>

          <li>
            <span className="icon-wrap">
              <img height="41" width="41" src={iconStarQ} alt="description" />
            </span>
          </li>
        </ul>

        <a href="#" className="widget-btn btn btn-dark d-block">
          Invite customers
        </a>
      </section>
    );
  }
}
