import Yup from '@car-service/common/lib/yupDecorator';

export const validationSchemaStep4 = Yup.object().shape({
  startingPrice: Yup.number()
    .positive()
    .required('Value is required'),
  reservePrice: Yup.number()
    .positive()
    .moreThan(Yup.ref('startingPrice')),
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
