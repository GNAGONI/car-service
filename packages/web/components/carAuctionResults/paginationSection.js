import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Select from 'components/commonSelector/commonSelector';
import Pagination from 'components/carAuctionResults/pagination';

const mapOptionToValue = option => (option ? { value: option, label: option } : {});

export default class extends PureComponent {
  static propTypes = {
    pageCount: PropTypes.number.isRequired,
    auctionsPerPageOptions: PropTypes.array.isRequired,
    onAuctionsDisplayPerPageChange: PropTypes.func.isRequired,
    onPageChange: PropTypes.func.isRequired,
    displayPerPage: PropTypes.number.isRequired,
    pageNumber: PropTypes.number.isRequired,
  };

  handleAuctionsDisplayPerPageChange = ({ value }) => {
    const { onAuctionsDisplayPerPageChange } = this.props;

    onAuctionsDisplayPerPageChange(value);
  };

  render() {
    const { pageCount, auctionsPerPageOptions, onPageChange, displayPerPage, pageNumber } = this.props;
    const displayAuctionsPerPageOptions =
      Array.isArray(auctionsPerPageOptions) && auctionsPerPageOptions.map(option => ({ label: option, value: option }));
    const displayAuctionsPerPageValue = mapOptionToValue(displayPerPage);

    return (
      <nav className="nav-paging" aria-label="Page navigation example">
        <form className="show-form form-inline">
          <span>Show:</span>
          <div className="form-group">
            <Select
              placeholder={displayPerPage}
              value={displayAuctionsPerPageValue}
              options={displayAuctionsPerPageOptions}
              onSelect={this.handleAuctionsDisplayPerPageChange}
            />
          </div>
        </form>
        <Pagination
          pageCount={pageCount}
          onPageChange={onPageChange}
          displayPerPage={displayPerPage}
          pageNumber={pageNumber}
        />
      </nav>
    );
  }
}
