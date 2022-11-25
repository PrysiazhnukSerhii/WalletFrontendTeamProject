import React from 'react';
import { Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import 'react-datetime/css/react-datetime.css';
import Datetime from 'react-datetime';
import {
  CheckboxWrapp,
  CheckboxInput,
  CheckboxTextExpense,
  CheckboxSlider,
  CheckboxTextIncome,
  Title,
  SumAndDateWrapp,
  SumField,
  Textarea,
  DatetimeInput,
} from './addTransanctionForm.styled';
import { MySelect } from './addTransactionFormSelect/addTransactionFormSelect';
import { TransactionFormButton } from '../addTransactionModal/addTransactionModal.styled';
import { TransactionForm } from './addTransanctionForm.styled';
import { useCreateTransactionMutation } from 'redux/transactionsSlice';

const TransactionSchema = Yup.object().shape({
  type: Yup.boolean()
    .oneOf([true, false])
    .required('Please indicate the type of your transaction'),
  sum: Yup.number()
    .min(1, 'Must be more than 1 characters')
    .required('This field is requried'),
  date: Yup.date().max(new Date(), "You can't make a transaction in future"),
  comment: Yup.string()
    .min(0)
    .max(200, 'Try to make your comment a bit shorter'),
  category: Yup.string().oneOf([
    'main',
    'food',
    'auto',
    'development',
    'children',
    'house',
    'education',
    'other',
  ]),
});

const initialValues = {
  type: false,
  sum: '',
  date: new Date(),
  comment: '',
  category: '',
};

const AddTransactionForm = ({ onCancel }) => {
  const [transactionType, setTransactionType] = useState(false);
  const [addTransaction] = useCreateTransactionMutation();

  return (
    <div>
      <Title>Add Transaction</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={TransactionSchema}
        onSubmit={async values => {
          // console.log(values);
          const newTransaction = {
            type: transactionType,
            category: values.category,
            sum: values.sum,
            date: values.date.getDate(),
            month: values.date.getMonth() + 1,
            year: values.date.getFullYear(),
            comment: values.comment,
          };
          // console.log(newTransaction);
          addTransaction(newTransaction);
          onCancel();
        }}
      >
        {({ handleSubmit, handleChange, setFieldValue, values }) => (
          <TransactionForm autoComplete="off">
            <CheckboxWrapp>
              <CheckboxInput
                type="checkbox"
                id="type"
                name="type"
                onChange={() => {
                  setTransactionType(!transactionType);
                }}
                checked={transactionType}
              />
              <CheckboxSlider />
              <CheckboxTextIncome>Income</CheckboxTextIncome>
              <CheckboxTextExpense>Expense</CheckboxTextExpense>
            </CheckboxWrapp>
            {!transactionType && (
              <MySelect
                name="category"
                onChange={data => setFieldValue('category', data?.value)}
              />
            )}
            <SumAndDateWrapp>
              <SumField id="sum" name="sum" placeholder="0.00" />
              <Datetime
                renderInput={props => <DatetimeInput {...props} />}
                id="date"
                closeOnSelect={true}
                closeOnClickOutside={true}
                name="date"
                initialValue={initialValues.date}
                dateFormat="DD-MM-YYYY"
                timeFormat={false}
                onChange={e => setFieldValue('date', new Date(e))}
                inputProps={{
                  onKeyDown: e => {
                    e.preventDefault();
                  },
                }}
              />
            </SumAndDateWrapp>
            <Textarea
              id="comment"
              name="comment"
              placeholder="Comment"
              onChange={handleChange}
            />
            <TransactionFormButton primary type="submit">
              ADD
            </TransactionFormButton>
          </TransactionForm>
        )}
      </Formik>
      <TransactionFormButton type="button" onClick={onCancel}>
        CANCEL
      </TransactionFormButton>
    </div>
  );
};

export default AddTransactionForm;
