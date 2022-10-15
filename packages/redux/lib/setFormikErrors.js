export default (setErrorsFunc = () => {}, errorsObject, setTouchedFunc = () => {}) => {
  if (typeof errorsObject === 'object' && typeof setErrorsFunc === 'function' && typeof setTouchedFunc === 'function') {
    const formattedErrorsObject = {};

    Object.keys(errorsObject).forEach(key => {
      setTouchedFunc(key, true, false);
    });

    Object.keys(errorsObject).forEach(key => {
      const errorValues = errorsObject[key];

      if (Array.isArray(errorValues)) {
        const [firstMessage] = errorValues;
        formattedErrorsObject[key] = firstMessage;
      }
    });

    setErrorsFunc(formattedErrorsObject);
  }
};
