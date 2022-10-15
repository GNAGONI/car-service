import React, { PureComponent } from 'react';
import { Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'server/pages';
// import Lightbox from 'react-images'

import Image from 'components/common/image';
import Countdown from 'components/countdown';
import { connect } from 'react-redux';
import { watchAuctionFinish, watchAuctionProgress } from '@car-service/redux/actions/auction';

class AuctionPost extends PureComponent {
  state = {
    // lightboxIsOpen: false,
    currentImage: 0,
  };

  componentDidMount() {
    this.props.startWatchingAction(this.props.id);
  }

  componentWillUnmount() {
    this.props.stopWatchingAction(this.props.id);
  }

  openLightbox = (index, event) => {
    event.preventDefault();
    this.setState({
      currentImage: index,
      // lightboxIsOpen: true,
    });
  };

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      // lightboxIsOpen: false,
    });
  };

  gotoPrevious = () => {
    this.setState(state => ({
      currentImage: state.currentImage - 1,
    }));
  };

  gotoNext = () => {
    this.setState(state => ({
      currentImage: state.currentImage + 1,
    }));
  };

  gotoImage = index => {
    this.setState({
      currentImage: index,
    });
  };

  handleClickImage = () => {
    if (this.state.currentImage === this.props.images.length - 1) return;

    this.gotoNext();
  };

  renderThumbnails = () => {
    const { isFeatured, images, name } = this.props;
    const isImageProvided = images && Array.isArray(images) && images.length;
    const middleImage = isImageProvided ? images[0].mid : '';

    return isImageProvided ? (
      <>
        <div className="img-thumbnail">
          <picture onClick={e => this.openLightbox(0, e)}>
            <source srcSet={`${middleImage}, ${middleImage} 2x"`} media="(max-width: 767px)" />
            <source srcSet={`${middleImage}, ${middleImage}`} />
            <Image src={middleImage} alt={name} width="380" height="228" />
          </picture>
          {/* <a href="#" className={`${isWatched ? 'active' : ''} btn-view`}>
            <span className="sr-only">View</span>
          </a> */}
          {isFeatured && <strong className="tag-featured">Featured</strong>}
        </div>
        {isFeatured && (
          <div className="thumbnails">
            {images.slice(1, 5).map((image, i) => (
              <div className="thumbnail" key={image.min}>
                <picture onClick={e => this.openLightbox(i + 1, e)}>
                  <source srcSet={`${image.min}, ${image} 2x"`} />
                  <Image src={image.min} alt={name} width="76" height="76" />
                </picture>
              </div>
            ))}
          </div>
        )}
      </>
    ) : (
      <div className="img-thumbnail">
        <Image alt="Default car" width="380" height="228" />
      </div>
    );
  };

  render() {
    // const { currentImage, lightboxIsOpen } = this.state
    const {
      isFeatured,
      isLargeViewGridFormat,
      price,
      numberOfBids,
      timeRemaining,
      name,
      // images,
      isMaxWidth,
      id,
    } = this.props;

    // TODO uncomment when work with image will be implemented from back-end side
    // const decaratedImages = images.map(image => ({ src: image }))
    const cardWidthViewGridFormat = isLargeViewGridFormat ? { lg: 3, md: 6, sm: 6 } : { lg: 4, md: 6, sm: 12 };
    const cardWidth = !isMaxWidth ? cardWidthViewGridFormat : {};

    const href = { pathname: '/car-auctions/car-auction-details', query: { id } };

    return (
      <Col
        className={`post-auction ${isFeatured ? 'featured' : ''}`}
        lg={cardWidth.lg || 12}
        md={cardWidth.md || 12}
        sm={cardWidth.sm || 12}
        key={id}
      >
        <div className="holder">
          {this.renderThumbnails()}
          {/*
            // TODO uncomment when work with image will be implemented from back-end side
            <Lightbox
              backdropClosesModal
              currentImage={currentImage}
              images={decaratedImages}
              isOpen={lightboxIsOpen}
              onClickImage={this.handleClickImage}
              onClickNext={this.gotoNext}
              onClickPrev={this.gotoPrevious}
              onClickThumbnail={this.gotoImage}
              onClose={this.closeLightbox}
            />
          */}
          <div className="frame">
            <div>
              <h3>
                <Link route={href}>
                  <a>{name}</a>
                </Link>
              </h3>
              <span className="price">
                £{price}{' '}
                <span className="text">
                  ( {numberOfBids} {numberOfBids > 1 ? 'bids' : 'bid'} )
                </span>
              </span>
              <time className="time" dateTime={timeRemaining}>
                {timeRemaining && <Countdown timeRemaining={timeRemaining} />}
              </time>
            </div>
            <div className="btn-block extend">
              <Link route={href}>
                <Button primary>View this auction</Button>
              </Link>
            </div>
          </div>
        </div>
      </Col>
    );
  }
}

AuctionPost.propTypes = {
  isFeatured: PropTypes.bool,
  images: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  numberOfBids: PropTypes.number.isRequired,
  timeRemaining: PropTypes.string.isRequired,
  // isWatched: PropTypes.bool,
  isLargeViewGridFormat: PropTypes.bool,
  isMaxWidth: PropTypes.bool,
  id: PropTypes.number.isRequired,
  startWatchingAction: PropTypes.func.isRequired,
  stopWatchingAction: PropTypes.func.isRequired,
};

AuctionPost.defaultProps = {
  // isWatched: false,
  isFeatured: false,
  isLargeViewGridFormat: false,
  isMaxWidth: false,
};

const mapDispatchToProps = dispatch => ({
  startWatchingAction: id => dispatch(watchAuctionProgress(id)),
  stopWatchingAction: id => dispatch(watchAuctionFinish(id)),
});

export default connect(
  null,
  mapDispatchToProps,
)(AuctionPost);
