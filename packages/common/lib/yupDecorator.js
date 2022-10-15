import * as Yup from 'yup';

/**
 * Adds the ability to compare 2 string fields
 *
 * @param {funcion} ref - Yup field to compare to
 * @param {string} [msg] - error message
 * @returns {fucntion} - function to be added to the yup methods
 */
function equalToRefString(ref, msg) {
  return this.test({
    name: 'equalToRefString',
    exclusive: false,
    message: msg || '${path} must be the same as ${reference}',
    params: {
      reference: ref.path,
    },
    test(value) {
      return value === this.resolve(ref);
    },
  });
}

/**
 * Adds the ability to compare 2 number fields
 *
 * @param {*} ref - Yup field to compare to
 * @param {*} msg - error message
 * @returns {fucntion} - function to be added to the yup methods
 */
function moreThanRefNumber(ref, msg) {
  return this.test({
    name: 'moreThanRefNumber',
    exclusive: false,
    message: msg || '${path} must be the more than ${reference}',
    params: {
      reference: ref.path,
    },
    test(value) {
      return value >= this.resolve(ref);
    },
  });
}

Yup.addMethod(Yup.string, 'equalToRefString', equalToRefString);
Yup.addMethod(Yup.number, 'moreThanRefNumber', moreThanRefNumber);

export default Yup;
