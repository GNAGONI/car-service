import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

const previousLabel = (
  <>
    <i className="icon-arrow-left" />
    <span className="sr-only">Previous</span>
  </>
);

const nextLabel = (
  <>
    <i className="icon-arrow-right" />
    <span className="sr-only">Next</span>
  </>
);

export default class extends PureComponent {
  static propTypes = {
    pageCount: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    pageNumber: PropTypes.number.isRequired,
  };

  handleAuctionsPageChange = ({ selected }) => {
    const { onPageChange } = this.props;

    onPageChange(selected);
  };

  render() {
    const { pageCount, pageNumber } = this.props;

    return (
      <ReactPaginate
        pageRangeDisplayed={5}
        forcePage={pageNumber}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        onPageChange={this.handleAuctionsPageChange}
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        previousLabel={previousLabel}
        nextLabel={nextLabel}
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
      />
    );
  }
}
