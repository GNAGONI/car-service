import React from 'react';

import { iconChat2Svg } from 'static/images/icons';

const MessagesDropdown = () => (
  <li className="dropdown">
    <a
      href="#"
      className="dropdown-toggle"
      role="button"
      id="dropdownMessage"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <span className="img-wrap">
        <img src={iconChat2Svg} width="26" height="24" alt="Chat" />
      </span>
      <span className="counter">3</span>
    </a>
    <div className="dropdown-menu message-drop" aria-labelledby="dropdownMessage">
      <div className="jcf-scrollable">
        <ul className="drop-list">
          <li className="status-green">
            <a href="#">
              <span className="title">Message Subject here</span>
              <span className="message-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..{' '}
              </span>
              <time dateTime="2011-01-12" className="message-time">
                18th September @ 14:29
              </time>
            </a>
          </li>
          <li className="status-green">
            <a href="#">
              <span className="title">A larger message Subject here and here over two lines</span>
              <span className="message-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..{' '}
              </span>
              <time dateTime="2011-01-12" className="message-time">
                18th September @ 14:29
              </time>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="title">A larger message Subject here and here over two lines</span>
              <span className="message-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..{' '}
              </span>
              <time dateTime="2011-01-12" className="message-time">
                18th September @ 14:29
              </time>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="title">Message Subject here</span>
              <span className="message-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..{' '}
              </span>
              <time dateTime="2011-01-12" className="message-time">
                18th September @ 14:29
              </time>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="title">Message Subject here</span>
              <span className="message-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..{' '}
              </span>
              <time dateTime="2011-01-12" className="message-time">
                18th September @ 14:29
              </time>
            </a>
          </li>
        </ul>
      </div>
      <div className="btn-holder">
        <a href="#" className="btn-drop">
          View all messages
        </a>
      </div>
    </div>
  </li>
);

export default MessagesDropdown;
