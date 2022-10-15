import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import Router, { withRouter } from 'next/router';
import { phraseFilterSelector } from '@car-service/redux/selectors/auctions';
import { searchAuctions, changePhraseFilter } from '@car-service/redux/actions/auctions';

class Intro extends Component {
  static propTypes = {
    onSearchAuctions: PropTypes.func,
    onChangePhraseFilter: PropTypes.func,
    showLeftTitle: PropTypes.bool,
    showTopTitle: PropTypes.bool,
    searchBlockTitle: PropTypes.string,
    searchBlockDescription: PropTypes.string,
  };

  static defaultProps = {
    showLeftTitle: true,
    showTopTitle: false,
    searchBlockTitle: '',
    searchBlockDescription: '',
    onSearchAuctions: () => {},
    onChangePhraseFilter: () => {},
  };

  state = {
    phraseFilter: '',
  };

  onSubmit = event => {
    event.preventDefault();
    const { onSearchAuctions, onChangePhraseFilter } = this.props;
    const { phraseFilter } = this.state;
    const minLengthPhraseFilter = 3;

    if (phraseFilter.length >= minLengthPhraseFilter) {
      onChangePhraseFilter(phraseFilter);
      onSearchAuctions();
      Router.pushRoute('/car-auctions/search-results');
    }
  };

  onChange = e => {
    this.setState({
      phraseFilter: e.target.value,
    });
  };

  render() {
    const { showLeftTitle, showTopTitle, searchBlockTitle, searchBlockDescription } = this.props;
    const { phraseFilter } = this.state;

    return (
      <section className="intro pb-3">
        <div className="img-area">
          <span data-srcset="images/banner-auction-mobile.jpg, images/banner-auction-mobile-2x.jpg 2x" />
          <span
            data-srcset="images/banner-auction-tablet.jpg, images/banner-auction-tablet-2x.jpg 2x"
            data-media="(min-width: 768px)"
          />
          <span
            data-srcset="images/banner-auction.jpg, images/banner-auction-2x.jpg 2x"
            data-media="(min-width: 1000px)"
          />
        </div>
        <Container>
          <Row>
            <Col>
              {showTopTitle && (
                <div className="title-top text-center">
                  <header>
                    {searchBlockTitle && <h1 dangerouslySetInnerHTML={{ __html: searchBlockTitle }} />}
                    {searchBlockDescription && <div dangerouslySetInnerHTML={{ __html: searchBlockDescription }} />}
                  </header>
                </div>
              )}
              <div className="search-area search-faqs inline">
                {showLeftTitle && (
                  <header className="section-head">
                    <h2>
                      <strong>Search</strong> car auctions
                    </h2>
                  </header>
                )}
                <div className="search-form">
                  <form className="form-area" onSubmit={this.onSubmit}>
                    <div className="form-inline">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search make, model, colour, location etc"
                          onChange={this.onChange}
                          value={phraseFilter}
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
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  phraseFilter: phraseFilterSelector,
});

const mapDispatchToProps = dispatch => ({
  onSearchAuctions: () => dispatch(searchAuctions()),
  onChangePhraseFilter: filter => dispatch(changePhraseFilter(filter)),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withRouter,
)(Intro);
