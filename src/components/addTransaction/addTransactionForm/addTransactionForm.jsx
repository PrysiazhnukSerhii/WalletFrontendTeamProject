import React from 'react';
import { Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import 'react-datetime/css/react-datetime.css';
import Datetime from 'react-datetime';
<<<<<<< HEAD
import { Oval } from 'react-loader-spinner';
=======
>>>>>>> main
import {
  CheckboxWrapp,
  CheckboxInput,
  CheckboxTextExpense,
  CheckboxSlider,
  CheckboxPoint,
  CheckboxTextIncome,
  Title,
  SumAndDateWrapp,
  CalendarWrap,
  DateWrap,
  SumField,
  Textarea,
  DatetimeInput,
} from './addTransanctionForm.styled';
import { MySelect } from './addTransactionFormSelect/addTransactionFormSelect';
<<<<<<< HEAD

=======
>>>>>>> main
import { TransactionFormButton } from '../addTransactionModal/addTransactionModal.styled';
import { TransactionForm } from './addTransanctionForm.styled';
import { useCreateTransactionMutation } from 'redux/transactionsSlice';
import Notiflix from 'notiflix';
import sprite from '../../../images/svg/symbol-defs.svg';
import { FiPlus, FiMinus } from 'react-icons/fi';

<<<<<<< HEAD
Notiflix.Notify.init({
=======
const notiflixOptions = Notiflix.Notify.init({
>>>>>>> main
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
<<<<<<< HEAD
    .typeError('Should be a string')
    .min(0)
    .max(200, 'Try to make your comment a bit shorter'),

=======
    .typeError("Should be a string")
    .min(0)
    .max(200, 'Try to make your comment a bit shorter'),
    
>>>>>>> main
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
<<<<<<< HEAD
  const [addTransaction, { isLoading }] = useCreateTransactionMutation();
=======
  const [addTransaction] = useCreateTransactionMutation();
>>>>>>> main

  return (
    <div>
      <Title>Add Transaction</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={TransactionSchema}
        onSubmit={async values => {
          const { category, sum, comment, date } = values;
<<<<<<< HEAD
          // console.log('Values', values);

=======
          console.log("Values", values);
          
>>>>>>> main
          const newTransaction = {
            type: transactionType,
            category: category === '' ? 'Other' : category,
            sum: Number(sum),
            date: date,
            month: Number(date.getMonth()) + 1,
            year: Number(date.getFullYear()),
            comment: comment === '' ? 'No comment' : comment,
          };
<<<<<<< HEAD
          // console.log('newTransaction', newTransaction);
          try {
            await addTransaction(newTransaction);
            onCancel();
            Notiflix.Notify.success('New transaction added success');
          } catch (error) {
            onCancel();
            Notiflix.Notify.failure('Something went wrong');
            console.log(error.message);
          }
        }}
      >
        {({
          handleSubmit,
          handleChange,
          setFieldValue,
          values,
          errors,
          touched,
          isValid,
          dirty,
        }) => (
=======
          console.log("newTransaction", newTransaction); 
          console.log(newTransaction);
          addTransaction(newTransaction);
          onCancel();
        }}
      >
        {({ handleSubmit, handleChange, setFieldValue, values, errors, touched, isValid, dirty }) => (
>>>>>>> main
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
<<<<<<< HEAD
              />
=======
              /> 
>>>>>>> main

              <CheckboxSlider>
                <CheckboxPoint isChecked={transactionType}>
                  {transactionType ? (
                    <FiPlus
                      style={{ color: 'white', width: '30px', height: '30px' }}
                    />
                  ) : (
                    <FiMinus
                      style={{ color: 'white', width: '30px', height: '30px' }}
                    />
                  )}
                </CheckboxPoint>
              </CheckboxSlider>

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
<<<<<<< HEAD
              <SumField
                type="number"
                id="sum"
                name="sum"
                placeholder="Sum: 0.00"
              />

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
                <CalendarWrap>
                  <svg width="18px" height="20px">
                    <use href={`${sprite}#icon-calendar`} />
                  </svg>
                </CalendarWrap>
              </DateWrap>
=======
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
                  <CalendarWrap>
                    <svg width='18px' height='20px'>
                      <use href={`${sprite}#icon-calendar`}/>
                    </svg>
                  </CalendarWrap>
                </DateWrap>
>>>>>>> main
            </SumAndDateWrapp>
            <Textarea
              id="comment"
              name="comment"
              placeholder="Comment"
              onChange={handleChange}
            />
<<<<<<< HEAD
            <TransactionFormButton
              primary
              type="submit"
              disabled={isLoading ? true : false}
            >
              {isLoading ? (
                <Oval
                  width={30}
                  height={30}
                  color="white"
                  ariaLabel="oval-loading"
                  secondaryColor="#000000"
                />
              ) : (
                <span>ADD</span>
              )}
=======
            <TransactionFormButton primary type="submit">
              ADD
>>>>>>> main
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
