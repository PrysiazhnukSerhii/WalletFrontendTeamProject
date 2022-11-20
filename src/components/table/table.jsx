// Верстка мобилка, планшет, десктоп
// Stateless компонент получает массив для рендера и
// методы для фильтрации на селекты
import { Form, Field } from 'formik';
import { Formik, ErrorMessage } from 'formik';
import { useState } from 'react';

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;

console.log(currentYear);
console.log(currentMonth);

let yearOptions = [];
for (let i = 2017; i <= currentYear; i += 1) {
  yearOptions.push(i);
}
console.log(yearOptions);

const initialValues = {
  month: currentMonth,
  year: currentYear,
};

export function Table({ categories, statistics }) {
  const { totalExpenses, totalIncome, totalCategories } = statistics;
  const [month, setMonth] = useState(initialValues.month);
  const [year, setYear] = useState(initialValues.year);

  function getSum(category) {
    const sum = totalCategories.find(total => total.category === category.title)
      ?.total;
    if (sum) {
      return sum;
    }
    return 0;
  }

  // onChange = { handleChange };

  return (
    <>
      <Formik
        initialValues={initialValues}
        // onSubmit={values => console.log(values)}
      >
        <Form>
          <Field
            name="month"
            as="select"
            placeholder="Month"
            value={month}
            onChange={e => {
              console.log(Number(e.currentTarget.value));
              setMonth(e.currentTarget.value);
            }}
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
          </Field>
          <ErrorMessage name="month" />
          <Field
            name="year"
            as="select"
            placeholder="Year"
            value={year}
            onChange={e => {
              console.log(e.currentTarget.value);
              setYear(e.currentTarget.value);
            }}
          >
            {yearOptions.map(year => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </Field>
        </Form>
      </Formik>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Sum</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(category => (
            <tr key={category.id}>
              <td>{category.title}</td>
              <td>{getSum(category)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>{`Expenses: ${totalExpenses}`}</p>
      <p>{`Income: ${totalIncome}`}</p>
    </>
  );
}
