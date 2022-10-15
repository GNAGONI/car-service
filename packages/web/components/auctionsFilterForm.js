import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CommonSelector from './commonSelector/commonSelector';
import { THEMES } from './commonSelector/constans';

export default class AuctionsFilterForm extends PureComponent {
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

  onSubmit = e => {
    e.preventDefault();
    const { sortBy, search } = this.state;

    this.props.onSubmit({ sortBy: sortBy && sortBy.value, search });
  };

  render() {
    const { sortByOptions } = this.props;

    const { search, sortBy } = this.state;

    return (
      <form action="#" className="filter-form" onSubmit={this.onSubmit}>
        <div className="input-row">
          <div className="form-group">
            <strong className="title">Filter Results</strong>
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
                  <button type="button" className="btn btn-dark">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <strong className="title">Sort by:</strong>
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
                  <button type="button" className="btn btn-dark btn-apply">
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
