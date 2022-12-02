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
  TotalExpenses,
  TotalIncome,
} from './table.styled';

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
      <TableContainer>
        <Formik initialValues={initialValues}>
          <StyledForm>
            <FieldContainer>
              <StyledField
                options={options}
                labelField="name"
                valueField="value"
                onChange={onMonthChange}
                placeholder={currentMonth}
              />
            </FieldContainer>
            <ErrorMessage name="month" />
            <FieldContainer>
              <StyledField
                options={yearOptions.map(year => ({ value: year }))}
                labelField="value"
                valueField="value"
                placeholder={year}
                onChange={onYearChange}
              ></StyledField>
            </FieldContainer>
          </StyledForm>
        </Formik>
        {isSuccess && !totalExpenses && !totalIncome ? null : (
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
          <TotalExpenses>{totalExpenses}</TotalExpenses>
        </Total>
        <Total>
          Income: <TotalIncome>{totalIncome}</TotalIncome>
        </Total>
      </TableContainer>
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
