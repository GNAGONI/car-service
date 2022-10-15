import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Countdown extends PureComponent {
  static propTypes = {
    timeRemaining: PropTypes.number.isRequired,
  };

  state = {
    timeRemaining: 0,
    days: 0,
    hours: 0,
    min: 0,
    sec: 0,
  };

  componentDidMount() {
    const { timeRemaining } = this.props;
    this.setState({ timeRemaining }, () => {
      this.interval = setInterval(() => {
        const isNotCalculated = !this.calculateRemainingTime();
        if (isNotCalculated) {
          this.stop();
        }
      }, 1000);
    });
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateRemainingTime = () => {
    // clear countdown when date is reached
    const { timeRemaining } = this.state;
    let timeToEnd = timeRemaining;
    let isCalculated;

    if (timeToEnd <= 0) {
      isCalculated = false;
    } else {
      const timeLeft = {
        days: 0,
        hours: 0,
        min: 0,
        sec: 0,
      };
      const SECONDS_PER_DAY = 86400;
      const SECONDS_PER_HOUR = 3600;
      const SECONDS_PER_MIN = 60;

      // calculate time difference between now and expected date
      if (timeToEnd >= SECONDS_PER_DAY) {
        timeLeft.days = Math.floor(timeToEnd / SECONDS_PER_DAY);
        timeToEnd -= timeLeft.days * SECONDS_PER_DAY;
      }
      if (timeToEnd >= SECONDS_PER_HOUR) {
        timeLeft.hours = Math.floor(timeToEnd / SECONDS_PER_HOUR);
        timeToEnd -= timeLeft.hours * SECONDS_PER_HOUR;
      }
      if (timeToEnd >= SECONDS_PER_MIN) {
        timeLeft.min = Math.floor(timeToEnd / SECONDS_PER_MIN);
        timeToEnd -= timeLeft.min * SECONDS_PER_MIN;
      }
      timeLeft.sec = Math.floor(timeToEnd);
      this.setState({ timeRemaining: timeRemaining - 1, ...timeLeft }, () => {
        isCalculated = true;
      });
    }
    return isCalculated;
  };

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros(value) {
    let number = String(value);
    while (number.length < 2) {
      number = `0${number}`;
    }
    return number;
  }

  render() {
    const { days, hours, min, sec } = this.state;
    const showDays = days > 0;
    const showHours = showDays || hours > 0;
    const showMinutes = showDays || showHours || min > 0;

    return (
      <>
        {showDays && <>{`${this.addLeadingZeros(days)} d `}</>}
        {showHours && <>{`${this.addLeadingZeros(hours)} hr `}</>}
        {showMinutes && <>{`${this.addLeadingZeros(min)} min `}</>}
        <>{`${this.addLeadingZeros(sec)} sec`}</>
      </>
    );
  }
}
