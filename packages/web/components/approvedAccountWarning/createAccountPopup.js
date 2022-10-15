import React from 'react';
import { Link } from 'server/pages';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const CreateAccountPopup = ({ textContent }) => (
  <div className="tab" id="tab-account">
    <div className="content-frame">
      <p>{textContent}</p>
    </div>
    <ul className="tick-list inline">
      <li>Build your business page</li>
      <li>Buy cars at auction</li>
      <li>Receive customer reviews</li>
    </ul>
    <div className="option-select">
      <h2 className="text-small">What best describes you or your company?</h2>
      <div className="btn-block">
        <Link route="/register/scrap-car-partners">
          <Button variant="primary" size="lg">
            Scrap car partner
          </Button>
        </Link>
        <Link route="/register/scrap-car-partners">
          <Button variant="primary" size="lg">
            Garage/Dealership
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

CreateAccountPopup.propTypes = {
  textContent: PropTypes.string,
};

CreateAccountPopup.defaultProps = {
  textContent: '',
};

export default CreateAccountPopup;
