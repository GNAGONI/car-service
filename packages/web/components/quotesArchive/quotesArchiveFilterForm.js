import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { THEMES } from '../commonSelector/constans';
import CommonSelector from '../commonSelector/commonSelector';

export default class QuotesAuctionFilterForm extends PureComponent {
  state = {
    search: '',
    sortBy: null,
  };

  static propTypes = {
    sortByOptions: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      }),
    ),
    onSubmit: PropTypes.func,
  };

  static defaultProps = {
    onSubmit: () => {},
    sortByOptions: [],
  };

  onSearch = e => {
    this.setState({ search: e.target.value });
  };

  onSelect = data => {
    this.setState({ sortBy: data });
  };

  onSelectDate = (/* data */) => {
    //  TODO ADD WHEN WILL CREATE DATE PICKER
  };

  onSubmit = e => {
    e.preventDefault();
    const { sortBy, search } = this.state;

    this.props.onSubmit({ sortBy: sortBy && sortBy.value, search });
  };

  render() {
    const { sortByOptions } = this.props;

    const { search, sortBy } = this.state;

    return (
      <form action="#" className="filter-form date-range" onSubmit={this.onSubmit}>
        <div className="input-row">
          <div className="form-group">
            <strong className="title">Filter Results</strong>
            <div className="form-row js-range-datepicker">
              <span className="label-wrap">
                <label htmlFor="date">
                  <i className="icon-calendar" />
                </label>
              </span>
              <div className="input-holder">
                <div className="input-wrap">
                  <input
                    type="text"
                    id="date"
                    className="form-control rangedatepicker"
                    placeholder="Select date range"
                  />
                </div>
                <div className="btn-holder">
                  <button type="submit" className="btn btn-dark">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="form-row">
              <span className="label-wrap">
                <label htmlFor="search">
                  <i className="icon-search" />
                </label>
              </span>
              <div className="input-holder">
                <div className="input-wrap">
                  <input
                    type="text"
                    id="search"
                    className="form-control"
                    placeholder="Search by Keywords"
                    onChange={this.onSearch}
                    value={search}
                  />
                </div>
                <div className="btn-holder">
                  <button type="submit" className="btn btn-dark">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group order-4 order-lg-3">
            <p>Showing 1-18 of 148 customer reviews</p>
          </div>
          <div className="form-group order-3 order-lg-4">
            <div className="form-row">
              <span className="label-wrap">
                <label htmlFor="sort">
                  <i className="icon-filter" />
                </label>
              </span>
              <div className="input-holder">
                <div className="input-wrap">
                  <CommonSelector
                    options={sortByOptions}
                    placeholder="Filter by..."
                    value={sortBy}
                    onSelect={this.onSelect}
                    theme={THEMES.partnerPortal}
                  />
                </div>
                <div className="btn-holder">
                  <button type="submit" className="btn btn-dark btn-apply">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
