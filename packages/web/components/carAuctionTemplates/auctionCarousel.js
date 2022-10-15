import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick-patch';
import LightBox from 'react-images';

export default class extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  state = {
    nav1: null,
    nav2: null,
    lightBoxIsOpen: false,
    slideIndex: 0,
  };

  componentDidMount() {
    this.setSliders();
  }

  setSliders = () => {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  };

  renderSlide = (image, i) => (
    <div className="slide" key={image}>
      <img className="img-area" src={image} alt="" />
      <div
        role="button"
        tabIndex="-1"
        className="btn-enlarge"
        onClick={e => this.openLightBox(i, e)}
        onKeyUp={() => {}}
      >
        <span className="sr-only">Enlarge</span>
      </div>
    </div>
  );

  renderPrevArrow = ({ className, onClick }) => (
    <div role="button" tabIndex="-1" className={`btn-prev ${className}`} onClick={onClick} onKeyUp={() => {}} />
  );

  renderNextArrow = ({ className, onClick }) => (
    <div role="button" tabIndex="-1" className={`btn-next ${className}`} onClick={onClick} onKeyUp={() => {}} />
  );

  renderSliderNumber = () => (
    <div className="slide-number">
      <span className="current-num">{this.state.slideIndex + 1}</span>
      <span className="total-num">{this.props.images.length}</span>
    </div>
  );

  renderThumbnail = image => (
    <div className="slide" key={image}>
      <img className="img-area" src={image} alt="" />
    </div>
  );

  slideChange = (_, newIndex) => {
    this.setState({ slideIndex: newIndex });
  };

  openLightBox = (index, event) => {
    event.preventDefault();
    this.setState({
      slideIndex: index,
      lightBoxIsOpen: true,
    });
  };

  closeLightBox = () => {
    this.setState({
      lightBoxIsOpen: false,
    });
  };

  gotoPrevious = () => {
    this.setState(prevState => ({
      slideIndex: prevState.slideIndex - 1,
    }));
  };

  gotoNext = () => {
    this.setState(prevState => ({
      slideIndex: prevState.slideIndex + 1,
    }));
  };

  gotoImage = index => {
    this.setState({
      slideIndex: index,
    });
  };

  render() {
    const { images } = this.props;
    const { slideIndex, lightBoxIsOpen } = this.state;
    const imagesForLightBox = images.map(image => ({ src: image }));

    return (
      <div className="banner-col">
        <div className="product-image-slider">
          <div className="product-holder">
            {images && images.length ? <strong className="tag-scrap">Marked as scrap</strong> : ''}
            <Slider
              className="slides"
              asNavFor={this.state.nav2}
              infinite={images.length >= 4}
              ref={slider => {
                this.slider1 = slider;
              }}
              prevArrow={<this.renderPrevArrow />}
              nextArrow={<this.renderNextArrow />}
            >
              {images.map((image, index) => this.renderSlide(image, index))}
            </Slider>
            {/* images && images.length ? this.renderSliderNumber() : '' */}
          </div>

          <Slider
            swipeToSlide
            focusOnSelect
            variableWidth
            arrows={false}
            className="thumbnail-slider"
            infinite={images.length >= 4}
            slidesToShow={images.length >= 4 ? 4 : 1}
            asNavFor={this.state.nav1}
            ref={slider => {
              this.slider2 = slider;
            }}
          >
            {images.map(image => this.renderThumbnail(image))}
          </Slider>

          <LightBox
            backdropClosesModal
            currentImage={slideIndex}
            images={imagesForLightBox}
            isOpen={lightBoxIsOpen}
            onClickImage={this.handleClickImage}
            onClickNext={this.gotoNext}
            onClickPrev={this.gotoPrevious}
            onClickThumbnail={this.gotoImage}
            onClose={this.closeLightBox}
          />
        </div>
      </div>
    );
  }
}
