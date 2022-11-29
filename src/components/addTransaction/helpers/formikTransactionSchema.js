import * as Yup from 'yup';

export const TransactionSchema = Yup.object().shape({
  type: Yup.boolean()
    .oneOf([true, false])
    .required('Please indicate the type of your transaction'),
  sum: Yup.number()
    .typeError('Sum should be a number')
    .min(1, 'Sum value should be more than 1')
    .required('This field is requried'),
  comment: Yup.string()
    .typeError('Should be a string')
    .min(0)
    .max(200, 'Try to make your comment a bit shorter'),

  category: Yup.string().oneOf([
    'Main',
    'Food',
    'Auto',
    'Development',
    'Children',
    'House',
    'Education',
    'Other',
  ]),
});
