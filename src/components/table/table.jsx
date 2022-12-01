import { Formik, ErrorMessage } from 'formik';
import {
  Total,
  Tabrow,
  TabHeader,
  Tabl,
  StyledForm,
  StyledField,
  TableHead,
  TableHeadTr,
  TableBody,
  BodyTr,
  BodyText,
  FieldContainer,
  TableContainer,
} from './table.styled';

import Notiflix from 'notiflix';

export function Table({
  month,
  year,
  initialValues,
  statistics,
  onMonthChange,
  onYearChange,
  isSuccess,
}) {
  const { totalExpenses, totalIncome, totalCategories } = statistics;

  const yearOptions = generateYearOptions(initialValues.year);
  Notiflix.Notify.merge({
    timeout: 4000,
    width: '300 px',
    useIcon: true,
    fontSize: '12px',
  });

  return (
    <>
      <TableContainer>
        <Formik initialValues={initialValues}>
          <StyledForm>
            <FieldContainer>
              <StyledField
                name="month"
                as="select"
                placeholder="Month"
                value={month}
                onChange={onMonthChange}
              >
                <option key="1" value="1">
                  January
                </option>
                <option key="2" value="2">
                  February
                </option>
                <option key="3" value="3">
                  March
                </option>
                <option key="4" value="4">
                  April
                </option>
                <option key="5" value="5">
                  May
                </option>
                <option key="6" value="6">
                  June
                </option>
                <option key="7" value="7">
                  July
                </option>
                <option key="8" value="8">
                  August
                </option>
                <option key="9" value="9">
                  September
                </option>
                <option key="10" value="10">
                  October
                </option>
                <option key="11" value="11">
                  November
                </option>
                <option key="12" value="12">
                  December
                </option>
              </StyledField>
            </FieldContainer>
            <ErrorMessage name="month" />
            <FieldContainer>
              <StyledField
                name="year"
                as="select"
                placeholder="Year"
                value={year}
                onChange={onYearChange}
              >
                {yearOptions.map(year => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </StyledField>
            </FieldContainer>
          </StyledForm>
        </Formik>

        {isSuccess && !totalExpenses && !totalIncome ? (
          Notiflix.Notify.warning(
            'There are no transactions in the selected period'
          )
        ) : (
          <Tabl>
            <TableHead>
              <TableHeadTr>
                <TabHeader>Category</TabHeader>
                <TabHeader>Sum</TabHeader>
              </TableHeadTr>
            </TableHead>
            <TableBody>
              {totalCategories.map(category => (
                <BodyTr key={category.id}>
                  <Tabrow>
                    <p
                      style={{
                        backgroundColor: category.color,
                        width: '30px',
                        height: '30px',
                      }}
                    ></p>
                    <BodyText>{category.title}</BodyText>
                  </Tabrow>
                  <Tabrow></Tabrow>
                  <Tabrow>
                    <BodyText>{category.total ? category.total : 0}</BodyText>
                  </Tabrow>
                </BodyTr>
              ))}
            </TableBody>
          </Tabl>
        )}
        <Total>
          Expenses:
          <span>{totalExpenses}</span>
        </Total>
        <Total>
          Income: <span>{totalIncome}</span>
        </Total>
      </TableContainer>
    </>
  );
}

function generateYearOptions(currentYear) {
  let yearOptions = [];
  for (let i = 2017; i <= currentYear; i += 1) {
    yearOptions.push(i);
  }
  return yearOptions;
}
