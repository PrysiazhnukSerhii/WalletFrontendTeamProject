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
  DateWrap,
  SumField,
  Textarea,
  DatetimeInput,
} from './addTransanctionForm.styled';
import { MySelect } from './addTransactionFormSelect/addTransactionFormSelect';
import { TransactionFormButton } from '../addTransactionModal/addTransactionModal.styled';
import { TransactionForm } from './addTransanctionForm.styled';
import { useCreateTransactionMutation } from 'redux/transactionsSlice';
import Notiflix from 'notiflix';
import sprite from '../../../images/svg/symbol-defs.svg';
// import { FiPlus, FiMinus } from 'react-icons/fi';

const notiflixOptions = Notiflix.Notify.init({
  width: '400px',
  position: 'top-right',
  distance: '50px',
  borderRadius: '10px',
  clickToClose: true,
  useIcon: false,
  fontSize: '23px',
});

const TransactionSchema = Yup.object().shape({
  type: Yup.boolean()
    .oneOf([true, false])
    .required('Please indicate the type of your transaction'),
  sum: Yup.number()
    .typeError('Sum should be a number')
    .min(1, 'Must be more than 1')
    .required('This field is requried'),
  date: Yup.date().max(new Date(), "You can't make a transaction in future"),
  comment: Yup.string()
    .typeError("Should be a string")
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
          const { category, sum, comment, date } = values;
          console.log("Values",values);
          const newTransaction = {
            type: transactionType,
            category: category === '' ? 'Other' : category,
            sum: Number(sum),
            date: Number(date.getDate()),
            month: Number(date.getMonth()) + 1,
            year: Number(date.getFullYear()),
            comment: comment,
          };
          console.log(newTransaction);
          addTransaction(newTransaction);
          onCancel();
        }}
      >
        {({ handleSubmit, handleChange, setFieldValue, values, errors, touched, isValid, dirty }) => (
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
              <CheckboxSlider/>              
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
              {touched.sum && errors.sum && Notiflix.Notify.warning(errors.sum)}
              <SumField type="number" id="sum" name="sum" placeholder="Sum: 0.00"/>
              
              <DateWrap>
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
                  {/* <img src='../../../images/svg/calendar.svg' width='18px' height='20px'/> */}
                    <svg width='18px' height='20px'>
                      <use href={`${sprite}#icon-calendar`}/>
                    </svg>
                </DateWrap>
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
