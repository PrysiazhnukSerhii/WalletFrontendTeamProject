import { Formik, ErrorMessage } from 'formik';
import Notiflix from 'notiflix';
// import { useEffect } from 'react';
import { useGetStatisticsMutation } from 'redux/transactionsSlice';
import { useState } from 'react';
import { StyledForm, StyledField, FieldContainer } from './selectors.styled';

const initialValues = {
  month: new Date().getMonth() + 1,
  year: new Date().getFullYear(),
};

export function Selectors() {
  const [month, setMonth] = useState(initialValues.month);
  const [year, setYear] = useState(initialValues.year);

  // useEffect(() => {
  //   handlePeriodChange({ month, year });
  // }, [month, year, handlePeriodChange]);
  const [getStatistics] = useGetStatisticsMutation();

  Notiflix.Notify.merge({
    timeout: 4000,
    width: '300 px',
    useIcon: true,
    fontSize: '12px',
    distance: '90px',
    clickToClose: true,
  });
  const handlePeriodChange = period => {
    console.log(period);
    getStatistics(period).then(({ data }) => {
      const { totalExpenses, totalIncome } = data[0];
      if (!totalExpenses && !totalIncome) {
        Notiflix.Notify.warning(
          'There are no transactions in the selected period'
        );
      }
    });
  };
  const handleMonthChange = e => {
    setMonth(Number(e[0].value));
    handlePeriodChange({ month, year });
  };
  const handleYearChange = e => {
    setYear(Number(e[0].value));
    handlePeriodChange({ month, year });
  };

  const options = [
    { name: 'January', value: 1 },
    { name: 'February', value: 2 },
    { name: 'March', value: 3 },
    { name: 'April', value: 4 },
    { name: 'May', value: 5 },
    { name: 'June', value: 6 },
    { name: 'July', value: 7 },
    { name: 'August', value: 8 },
    { name: 'September', value: 9 },
    { name: 'October', value: 10 },
    { name: 'November', value: 11 },
    { name: 'December', value: 12 },
  ];

  const yearOptions = generateYearOptions(initialValues.year);
  const currentMonth = generateCurrentMonth(month, options);

  return (
    <>
      <Formik initialValues={initialValues}>
        <StyledForm>
          <FieldContainer>
            <StyledField
              options={options}
              labelField="name"
              valueField="value"
              onChange={handleMonthChange}
              placeholder={currentMonth}
            />
          </FieldContainer>
          <ErrorMessage name="month" />
          <FieldContainer>
            <StyledField
              options={yearOptions.map(year => ({
                value: year,
              }))}
              labelField="value"
              valueField="value"
              placeholder={year}
              onChange={handleYearChange}
            ></StyledField>
          </FieldContainer>
        </StyledForm>
      </Formik>
    </>
  );
}

function generateCurrentMonth(month, options) {
  let currentMonth = options.filter(e => e.value === month);

  return currentMonth[0].name;
}

function generateYearOptions(currentYear) {
  let yearOptions = [];
  for (let i = 2017; i <= currentYear; i += 1) {
    yearOptions.push(i);
  }
  return yearOptions;
}
