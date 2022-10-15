import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import client from '@car-service/api-client';
import Autosuggest from 'react-autosuggest';

import ErrorIndificator from '../errorIndificator';

const PostcodeAutocomplete = ({
  value,
  error,
  name,
  id,
  placeholder,
  classNames,
  setFieldValue,
  setFieldTouched,
  isUppercaseValue,
}) => {
  const [suggestions, setSuggestions] = useState([]);

  const onSuggestionsFetchRequested = async ({ value: val }) => {
    try {
      const suggested = await client.postCodes.autocomplete(val);
      if (suggested?.length) {
        setSuggestions(suggested);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onSuggestionsClearRequested = () => setSuggestions([]);

  const getSuggestionValue = suggestion => suggestion;

  const renderSuggestion = suggestion => <div>{suggestion}</div>;

  const shouldRenderSuggestions = val => val.trimStart().length > 3;

  const inputProps = {
    placeholder,
    value,
    name,
    id,
    onChange: (e, { newValue }) => setFieldValue(name, isUppercaseValue ? newValue.toUpperCase() : newValue),
    onBlur: () => setFieldTouched(name),
    className: 'form-control',
  };
  return (
    <div className={cn('input-group', { 'has-error': error }, classNames)}>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        shouldRenderSuggestions={shouldRenderSuggestions}
        inputProps={inputProps}
      />
      {error && <ErrorIndificator message={error} />}
    </div>
  );
};

PostcodeAutocomplete.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  classNames: PropTypes.string,
  isUppercaseValue: PropTypes.bool,
};

PostcodeAutocomplete.defaultProps = {
  id: '',
  placeholder: '',
  error: '',
  classNames: '',
  isUppercaseValue: false,
};

export default PostcodeAutocomplete;
