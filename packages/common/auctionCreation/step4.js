import * as Yup from 'yup';

export const validationSchemaStep4 = Yup.object().shape({
  startingPrice: Yup.number()
    .positive()
    .integer()
    .min(0)
    .required('Value is required'),
  reservePrice: Yup.mixed()
    .test('notLessThan', 'Value should be not less than starting price', function(value) {
      const { startingPrice } = this.parent;
      return value >= startingPrice;
    })
    .required('Value is required'),
  durationDays: Yup.object().required('Value is required'),
  listingStartDate: Yup.date().required('Value is required'),
  listingStartTime: Yup.object().required('Value is required'),
  preferredCollectionDateTime: Yup.array()
    .of(
      Yup.object().shape({
        preferredCollectionDate: Yup.date().required('Value is required'),
        preferredCollectionTime: Yup.object().required('Value is required'),
      }),
    )
    .required('Value is required')
    .min(1, 'Minimum 1 Preferred Collection Time'),
});

export const preferredCollectionDateInitialValue = { preferredCollectionDate: '', preferredCollectionTime: '' };
export const initialValues = {
  startingPrice: '',
  reservePrice: '',
  durationDays: { value: '7d', label: '7 days' },
  listingStartDate: '',
  listingStartTime: '',
  preferredCollectionDateTime: [{ ...preferredCollectionDateInitialValue }],
};
