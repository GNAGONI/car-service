import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

import CountDown from 'components/countdown';
import ErrorAlert from '../errorAlert';

export class CarAuctionPlaceBidForm extends Component {
  state = {
    currentBit: 0,
    isOutbid: false,
  };

  static propTypes = {
    formData: PropTypes.shape({
      name: PropTypes.string,
      currentBid: PropTypes.number,
      currentUserBid: PropTypes.number,
      bidsCount: PropTypes.number,
      timeRemaining: PropTypes.number,
    }),
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func,
    bidPropositionCount: PropTypes.number,
    bidPropositionSteps: PropTypes.number,
    error: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    formData: {},
    onSubmit: () => {},
    onCancel: () => {},
    bidPropositionSteps: 4,
    bidPropositionCount: 20,
    error: null,
  };

  componentDidMount() {
    this.generateBitsLine();
    if (this.props.formData.currentBid) {
      this.setState({ currentBit: this.props.formData.currentBid });
    }
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.formData.currentBid !== this.props.formData.currentBid &&
      this.props.formData.currentBid > this.state.currentBit
    ) {
      this.setState({ isOutbid: true });
    }
  }

  generateBitsLine() {
    const bitsLine = [];

    const { formData, bidPropositionSteps, bidPropositionCount } = this.props;

    let lastBid = formData.currentBid || 0;

    for (let i = 0; i < bidPropositionSteps; i += 1) {
      lastBid += bidPropositionCount;
      bitsLine.push(Math.ceil(lastBid / 10) * 10);
    }

    return bitsLine;
  }

  onBitChange = e => {
    this.setState({
      currentBit: e.target.value,
      isOutbid: e.target.value <= this.props.formData.currentBid,
    });
  };

  onCheckboxClicked = currentBit => {
    this.setState({ currentBit });
  };

  onSubmit = e => {
    e.preventDefault();

    const { onSubmit } = this.props;

    onSubmit(this.state.currentBit);
  };

  renderControlInput = bid => (
    <li key={bid}>
      <div className="custom-control custom-radio">
        <input
          type="radio"
          className="custom-control-input"
          id={`id${bid}`}
          name="details"
          checked={bid.toString() === this.state.currentBit.toString()}
          onChange={() => this.onCheckboxClicked(bid)}
        />
        <label className="custom-control-label" htmlFor={`id${bid}`}>
          £{bid}
        </label>
      </div>
    </li>
  );

  render() {
    const bitsLine = this.generateBitsLine();
    const { currentBit, isOutbid } = this.state;
    const { formData, error, onCancel } = this.props;
    const { name, currentBid, bidsCount, timeRemaining } = formData || {};

    return (
      <div className="popup popup-bidding text-center" id="popup-bidding">
        <header className="section-head">
          <h3>Bidding on</h3>
          <h2>{name}</h2>
          <div className="text-box">
            <span className="text">
              Current bid:
              <strong>£{currentBid || 0}</strong> ({bidsCount} {bidsCount > 1 ? 'bids' : 'bid'} )
            </span>

            <span className="text">
              <i className="icon-clock" />
              Time remaining:
              <span>
                &nbsp;
                {timeRemaining && <CountDown isOnlyVisible isRound timeRemaining={timeRemaining} />}
              </span>
            </span>
          </div>
        </header>
        <div className="bid-form price-selector form-large form-bordered b-validation">
          <form onSubmit={this.onSubmit}>
            <div className="form-row">
              <div className="form-group col-12 has-icon-first">
                <label htmlFor="current-bit">We’ll bid for you, up to:</label>
                {isOutbid && (
                  <ErrorAlert message="You have been outbid on this vehicle. Please make another bid below" />
                )}
                <div className="input-group">
                  <input
                    id="current-bit"
                    type="text"
                    className="form-control price-input"
                    value={currentBit}
                    onChange={this.onBitChange}
                  />
                  <i className="ico ico-text">£</i>
                </div>
              </div>
            </div>

            <div>{error ? <Alert variant="danger mb-3">{error[0]}</Alert> : null}</div>

            <ul className="selection-list price-selection">{bitsLine.map(bid => this.renderControlInput(bid))}</ul>
            <p>
              By selecting Place bid, you commit to buy this car from
              <br />
              the seller if you are the winning bidder.
            </p>
            <div className="btn-block">
              <button type="submit" className="btn btn-primary btn-xl">
                Place bid
              </button>
              <span role="button" tabIndex="-1" className="btn-cancel" onClick={onCancel} onKeyUp={() => {}}>
                Cancel bid
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
