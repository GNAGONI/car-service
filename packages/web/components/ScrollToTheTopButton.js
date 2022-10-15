import React, { PureComponent, createRef } from 'react';
import cn from 'classnames';
class ScrollToTheTopButton extends PureComponent {
  constructor(props) {
    super(props);
    this.scrollToTheTopButton = createRef();
    this.state = {
      isInTheFooter: false,
      isHover: false,
    };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  };

  get isScrollButtonInTheFooter() {
    const footer = document.getElementById('footer');
    return Boolean(footer) && window.scrollY + window.innerHeight - this.buttonHeight > footer.offsetTop;
  }

  get buttonHeight() {
    const heightRegex = /\d+/g;
    const buttonHeight = getComputedStyle(this.scrollToTheTopButton).height.match(heightRegex)[0];
    return Number(buttonHeight);
  }

  handleScroll = () => {
    this.setState({
      isInTheFooter: this.isScrollButtonInTheFooter,
    });

    window.scrollY > 150
      ? (this.scrollToTheTopButton.style.display = 'block')
      : (this.scrollToTheTopButton.style.display = 'none');
  };

  handleClick = () => {
    this.setState({
      isInTheFooter: false,
      isHover: false,
    });
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  handleHover = () => {
    this.setState({
      isHover: true,
    });
  };

  handleLeave = () => {
    this.setState({
      isHover: false,
    });
  };

  render() {
    return (
      <span
        ref={scrollToTheTopButton => {
          this.scrollToTheTopButton = scrollToTheTopButton;
        }}
        role="button"
        tabIndex="-1"
        className={cn('btn-up', {
          'btn-up-colored': this.state.isInTheFooter,
          'btn-up-hovered': this.state.isHover,
        })}
        onClick={this.handleClick}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleLeave}
        onTouchEnd={this.handleClick}
        onKeyUp={() => {}}
      />
    );
  }
}

export default ScrollToTheTopButton;
