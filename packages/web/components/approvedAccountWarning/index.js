import React, { useState } from 'react';
import cn from 'classnames';
import { CREATE_ACCOUNT, SIGN_IN } from 'constants/messages';
import CreateAccountPopup from 'components/approvedAccountWarning/createAccountPopup';
import SignInPopup from 'components/approvedAccountWarning//signInPopup';

const signinContent = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim.`;

const createContent = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim.`;

const ApprovedAccountWarning = () => {
  const [currentTab, setCurrentTab] = useState(SIGN_IN);

  return (
    <div className="popup popup-md popup-signin bg-light text-center">
      <header className="section-head bordered">
        <h2>
          You need to hold an <strong>approved account</strong> to be able to bid on this car
        </h2>
      </header>
      <div className="popup-content">
        <ul className="tabset">
          <li className={cn({ active: currentTab === SIGN_IN })}>
            <a onClick={() => setCurrentTab(SIGN_IN)} role="button" tabIndex="-1" onKeyUp={() => {}}>
              {SIGN_IN}
            </a>
          </li>
          <li className={cn({ active: currentTab === CREATE_ACCOUNT })}>
            <a onClick={() => setCurrentTab(CREATE_ACCOUNT)} role="button" tabIndex="-1" onKeyUp={() => {}}>
              {CREATE_ACCOUNT}
            </a>
          </li>
        </ul>
        <div className="tab-content">
          {currentTab === SIGN_IN ? (
            <SignInPopup textContent={signinContent} />
          ) : (
            <CreateAccountPopup textContent={createContent} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ApprovedAccountWarning;
