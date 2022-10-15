import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'server/pages';

const filterBox = ({ normalImage, browseBy, link }) => (
  <article className="col-12 col-md-4 box-filter text-center">
    <div className="holder">
      <div className="img-area">
        <img src={normalImage} alt="normal" />
      </div>
      <div className="text-box">
        <h2>
          <strong>
            Browse by <br />
            {browseBy}
          </strong>
        </h2>
        <div className="btn-block">
          <Link route={link}>
            <button type="button" className="btn btn-primary btn-ml">
              Search
            </button>
          </Link>
        </div>
      </div>
    </div>
  </article>
);

filterBox.propTypes = {
  normalImage: PropTypes.string.isRequired,
  browseBy: PropTypes.string.isRequired,
  link: PropTypes.oneOfType(PropTypes.string, PropTypes.object).isRequired,
};

export default filterBox;
