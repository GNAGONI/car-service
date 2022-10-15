import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { iconGB } from 'static/images/icons';
import BaseForm from './BaseForm';

const HeaderForm = ({ formText }) => (
  <div className={cn('search-form', { 'same-height-left': formText }, { 'add-text': formText })}>
    <div className="holder">
      <div className={cn('ico same-height-right', { 'add-text': formText })}>
        <img src={iconGB} alt="GB" />
      </div>
      {formText && <h2 dangerouslySetInnerHTML={{ __html: formText }} />}
    </div>
    <BaseForm formType="inline" buttonText="Get price" />{' '}
  </div>
);

HeaderForm.propTypes = {
  formText: PropTypes.string,
};

HeaderForm.defaultProps = {
  formText: '',
};

export default HeaderForm;
