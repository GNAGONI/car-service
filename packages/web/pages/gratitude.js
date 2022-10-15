import React from 'react';
import PropTypes from 'prop-types';

import Page from 'components/page';
import { DefaultHeader } from 'components/Header';
import Gratitude from 'modules/gratitude/Gratitude';
import Footer from 'components/Footer';

const UserGratitude = ({
  title,
  gratitudeHeaderLabel,
  gratitudeHeaderMessage,
  gratitudeStepsHeader,
  gratitudeSteps,
}) => (
  <Page title={title}>
    <DefaultHeader />
    <Gratitude>
      <Gratitude.Header gratitudeHeaderLabel={gratitudeHeaderLabel} gratitudeHeaderMessage={gratitudeHeaderMessage} />
      <Gratitude.List gratitudeStepsHeader={gratitudeStepsHeader} gratitudeSteps={gratitudeSteps} />
    </Gratitude>
    <Footer />
  </Page>
);

UserGratitude.getInitialProps = () => ({
  gratitudeHeaderLabel: `<strong>Thank you, your contact form has been received by our team</strong>`,
  gratitudeHeaderMessage:
    'Your enquiry will be handled by one of our expert team; they’ll look into your query, and\n' +
    'we’ll be back in touch with the information you need within 48 hours.',
  gratitudeStepsHeader: '<strong>What happens next?</strong>',
  gratitudeSteps: [
    {
      id: 1,
      stepHead: 'Step 1',
      stepMessage: 'Your enquiry will be reviewed and passed to the most appropriate member of the Car.service team.',
    },
    {
      id: 2,
      stepHead: 'Step 2',
      stepMessage: 'You might want to check our extensive range of detailed FAQs in the meantime to find an answer.',
    },
    {
      id: 3,
      stepHead: 'Step 3',
      stepMessage: 'We’ll be back in touch with you within 48 hours, with more information about your query.',
    },
  ],
});

UserGratitude.propTypes = {
  title: PropTypes.string,
  gratitudeHeaderLabel: PropTypes.string,
  gratitudeHeaderMessage: PropTypes.string,
  gratitudeStepsHeader: PropTypes.string,
  gratitudeSteps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      stepHead: PropTypes.string,
      stepMessage: PropTypes.string,
    }),
  ),
};

UserGratitude.defaultProps = {
  title: '',
};

export default UserGratitude;
