import React from 'react';

export default () => (
  <section className="intro">
    <div className="img-area">
      <span data-srcset="images/banner-auction-mobile.jpg, images/banner-auction-mobile-2x.jpg 2x" />
      <span
        data-srcset="images/banner-auction-tablet.jpg, images/banner-auction-tablet-2x.jpg 2x"
        data-media="(min-width: 768px)"
      />
      <span data-srcset="images/banner-auction.jpg, images/banner-auction-2x.jpg 2x" data-media="(min-width: 1000px)" />
    </div>
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="search-area search-faqs text-center">
            <header className="section-head">
              <h1>
                Car auctions{' '}
                <strong>
                  made <br />
                  easy
                </strong>{' '}
                with Car.service
              </h1>
              <div className="text-box">
                <p>Online salvage, seized and used car auctions at below trade prices</p>
              </div>
            </header>
            <div className="search-form">
              <form className="form-area">
                <div className="form-inline">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search make, model, colour, location etc"
                    />
                  </div>
                  <div className="btn-block">
                    <button type="submit" className="btn btn-primary">
                      Search
                    </button>
                  </div>
                </div>
              </form>
              <div className="tags">
                <strong className="title">Popular searches: </strong>
                <ul>
                  <li>
                    <a href="#">Vauxhall</a>
                  </li>
                  <li>
                    <a href="#">BMW</a>
                  </li>
                  <li>
                    <a href="#">Audi</a>
                  </li>
                  <li>
                    <a href="#">Manchester</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
