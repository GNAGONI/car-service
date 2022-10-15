import React, { PureComponent } from 'react';

import { appIosPng, appAndroidPng, mobileApp } from 'static/images';

export default class DownloadAppWidget extends PureComponent {
  render() {
    return (
      <section className="widget app-widget app-downloads">
        <div className="widget-head text-center">
          <h3>Download the car.service app</h3>
        </div>
        <ul className="app-downloads">
          <li>
            <a href="#">
              <img src={appIosPng} alt="Download on the App Store" width="88" height="29" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={appAndroidPng} alt="GET IT ON Google Play" width="99" height="30" />
            </a>
          </li>
        </ul>
        <div className="img-mobile-holder">
          <img src={mobileApp} alt="description" />
        </div>
      </section>
    );
  }
}
