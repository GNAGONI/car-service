import React, { PureComponent } from 'react';

import MultiStepProgress from 'components/MultiStep/MultiStepProgress';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';

import Step6 from './Step6';

const maxStepNumber = 5;
const minStepNumber = 0;

const stepNames = [
  'Vehicle details',
  'Your auction listing',
  'Upload photos',
  'Price, duration & start time',
  'Package & payment',
  'Overview',
];

class AuctionYourCarMultistep extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      sharedValues: {},
    };
  }

  /**
   * Scrolls To top
   */
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  /**
   * Sets intermediate values to state
   *
   * @param {object} values - submited values from step
   */
  next = values => {
    this.setState(prevState => ({
      page: prevState.page < maxStepNumber ? prevState.page + 1 : prevState.page,
      sharedValues: { ...prevState.sharedValues, ...values },
    }));

    this.scrollToTop();
  };

  /**
   * Sets previous page number into state
   */
  goBack = () => {
    this.setState(prevState => ({
      page: prevState.page > minStepNumber ? prevState.page - 1 : prevState.page,
    }));
    this.scrollToTop();
  };

  /**
   * Restart form
   */
  restart = () => {
    this.setState({ page: 0, sharedValues: {} });
    this.scrollToTop();
  };

  renderStep = () => {
    const { page, sharedValues } = this.state;

    switch (page) {
      case 0: {
        return <Step1 nextButtonText="Next" page={page} goBack={this.goBack} next={this.next} restart={this.restart} />;
      }
      case 1: {
        return (
          <Step2
            nextButtonText="Next"
            page={page}
            goBack={this.goBack}
            next={this.next}
            restart={this.restart}
            sharedValues={sharedValues}
          />
        );
      }
      case 2: {
        return (
          <Step3
            nextButtonText="Next"
            page={page}
            goBack={this.goBack}
            next={this.next}
            restart={this.restart}
            sharedValues={sharedValues}
          />
        );
      }
      case 3: {
        return (
          <Step4
            nextButtonText="Next"
            page={page}
            goBack={this.goBack}
            next={this.next}
            restart={this.restart}
            sharedValues={sharedValues}
          />
        );
      }
      case 4: {
        return (
          <Step5
            nextButtonText="Next"
            page={page}
            goBack={this.goBack}
            next={this.next}
            restart={this.restart}
            sharedValues={sharedValues}
          />
        );
      }
      case 5: {
        return (
          <Step6
            nextButtonText="Submit"
            page={page}
            goBack={this.goBack}
            next={this.next}
            restart={this.restart}
            sharedValues={sharedValues}
          />
        );
      }
      default: {
        return (
          <Step1
            nextButtonText="Next"
            page={page}
            goBack={this.goBack}
            next={this.next}
            restart={this.restart}
            sharedValues={sharedValues}
          />
        );
      }
    }
  };

  render() {
    const { page } = this.state;

    return (
      <section className="section-process extend content bg-before-default form-large form-bordered b-validation section-multistep">
        <MultiStepProgress page={page} stepNames={stepNames} />
        <div className="content-holder">{this.renderStep()}</div>
      </section>
    );
  }
}

export default AuctionYourCarMultistep;
