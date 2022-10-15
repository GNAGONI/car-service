import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { totalNumberOfAuctionsSelector, phraseFilterSelector } from '@car-service/redux/selectors/auctions';

class SubHeader extends PureComponent {
  static propTypes = {
    totalNumberOfAuctions: PropTypes.string,
    phraseFilter: PropTypes.string,
  };

  static defaultProps = {
    totalNumberOfAuctions: '',
    phraseFilter: '',
  };

  render() {
    const { totalNumberOfAuctions, phraseFilter } = this.props;
    const showSearchReport = Boolean(totalNumberOfAuctions && phraseFilter);
    const showPhrase = Boolean(phraseFilter && phraseFilter.length);

    return (
      <section className="content section-auction bg-before-default extend">
        <header className="section-head text-center">
          {showSearchReport ? (
            <h2>
              Your search has returned {totalNumberOfAuctions} results {showPhrase ? 'for' : ''}
              {showPhrase && (
                <>
                  <br />
                  <strong> {phraseFilter}</strong>
                </>
              )}
            </h2>
          ) : (
            ''
          )}
        </header>
      </section>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  totalNumberOfAuctions: totalNumberOfAuctionsSelector,
  phraseFilter: phraseFilterSelector,
});

export default connect(mapStateToProps)(SubHeader);
