import React from 'react';
import { imgSignup, imgSignup2x } from 'static/images';

export default () => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        <section className="content extend auction-features">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 content-block">
              <div className="section-head">
                <h2 className="text-small">
                  Are you a{' '}
                  <strong>
                    Scrap
                    <br /> car dealer
                  </strong>
                  ?{' '}
                </h2>
                <div className="text-box">
                  <p>Lorem ipsum dolor sit amet, consect adipiscing elitd iam nonummy.</p>
                </div>
              </div>
              <ul className="tick-list">
                <li>Build your business page</li>
                <li>Access to scrap cars in your area</li>
                <li>Buy scrap cars at auction</li>
                <li>Receive customer reviews</li>
                <li>Bespoke reporting</li>
              </ul>
              <div className="btn-block">
                <a href="#" className="btn btn-block btn-primary btn-lg">
                  Sign up now
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-4 d-none d-lg-flex content-block justify-content-center">
              <div className="img-area">
                <picture>
                  <source srcSet={`${imgSignup}, ${imgSignup2x} 2x"`} />
                  <img src={imgSignup} alt="SignUp" width="389" height="415" />
                </picture>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 content-block">
              <span className="bg-model" />
              <div className="section-head">
                <h2 className="text-small">
                  Are you a{' '}
                  <strong>
                    garage
                    <br /> or dealership
                  </strong>
                  ?
                </h2>
                <div className="text-box">
                  <p>Lorem ipsum dolor sit amet, consect adipiscing elitd iam nonummy.</p>
                </div>
              </div>
              <ul className="tick-list">
                <li>Build your business page</li>
                <li>Buy cars at auction</li>
                <li>Receive customer reviews</li>
                <li>Bespoke reporting</li>
                <li>Then include a register button</li>
              </ul>
              <div className="btn-block">
                <a href="#" className="btn btn-block btn-primary btn-lg">
                  Sign up now
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
);
