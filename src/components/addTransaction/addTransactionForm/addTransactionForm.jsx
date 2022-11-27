import React from 'react';
import { Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import 'react-datetime/css/react-datetime.css';
import Datetime from 'react-datetime';
import { Oval } from 'react-loader-spinner';
import {
  CheckboxWrapp,
  CheckboxInput,
  CheckboxTextExpense,
  CheckboxSlider,
  CheckboxPoint,
  CheckboxTextIncome,
  Title,
  SumAndDateWrapp,
  SumWrap,
  CalendarWrap,
  DateWrap,
  SumField,
  Textarea,
  DatetimeInput,
  Error
} from './addTransanctionForm.styled';
import { MySelect } from './addTransactionFormSelect/addTransactionFormSelect';
import { TransactionFormButton } from '../addTransactionModal/addTransactionModal.styled';
import { TransactionForm } from './addTransanctionForm.styled';
import { useCreateTransactionMutation } from 'redux/transactionsSlice';
import Notiflix from 'notiflix';
import sprite from '../../../images/svg/symbol-defs.svg';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { style } from 'styled-system';

Notiflix.Notify.init({
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
    .min(1, 'Sum value should be more than 1')
    .required('This field is requried'),
  date: Yup.date().max(new Date(), "You can't make a transaction in future"),
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

const initialValues = {
  type: false,
  sum: '',
  date: new Date(),
  comment: '',
  category: '',
};

const AddTransactionForm = ({ onCancel }) => {
  const [transactionType, setTransactionType] = useState(false);
  const [addTransaction, { isLoading }] = useCreateTransactionMutation();

  return (
    <div>
      <Title>Add Transaction</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={TransactionSchema}
        onSubmit={async values => {
          const { category, sum, comment, date } = values;
          // console.log('Values', values);

          const newTransaction = {
            type: transactionType,
            category: category === '' ? 'Other' : category,
            sum: Number(sum),
            date: date,
            month: Number(date.getMonth()) + 1,
            year: Number(date.getFullYear()),
            comment: comment === '' ? 'No comment' : comment,
          };
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
               {touched.type && errors.type && <Error>{errors.type}</Error>}
              <CheckboxTextIncome>Income</CheckboxTextIncome>
              <CheckboxTextExpense>Expense</CheckboxTextExpense>
            </CheckboxWrapp>

            {!transactionType && (
              <MySelect
                name="category"
                onChange={data => setFieldValue('category', data?.value)}
              />
            )
            }
            {touched.category && errors.category && <Error>{errors.category}</Error>}

            <SumAndDateWrapp>
              <SumWrap>
                <SumField
                  type="number"
                  id="sum"
                  name="sum"
                  placeholder="Sum: 0.00"
                />
                {touched.sum && errors.sum && <Error>{errors.sum}</Error>}
              </SumWrap>
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
                {touched.date && errors.date && <Error>{errors.date}</Error>}
                <CalendarWrap>
                  <svg width="18px" height="20px">
                    <use href={`${sprite}#icon-calendar`} />
                  </svg>
                </CalendarWrap>
              </DateWrap>
              
            </SumAndDateWrapp>
            <Textarea
              id="comment"
              name="comment"
              placeholder="Comment"
              onChange={handleChange}
            />
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
