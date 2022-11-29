// Верстка мобилка, планшет, десктоп
// Stateless компонент получает массив для рендера и
// методы для фильтрации на селекты
import { Form, Field } from 'formik';
import { Formik, ErrorMessage } from 'formik';
import Notiflix from 'notiflix';

export function Table({
  month,
  year,
  initialValues,
  statistics,
  onMonthChange,
  onYearChange,
}) {
  const { totalExpenses, totalIncome, totalCategories } = statistics;

  const yearOptions = generateYearOptions(initialValues.year);

  if (!totalExpenses && !totalIncome) {
    Notiflix.Notify.warning('There are no transactions in the selected period');
  }
  return (
    <>
      <Formik initialValues={initialValues}>
        <Form>
          <Field
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
          </Field>
          <ErrorMessage name="month" />
          <Field
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
          </Field>
        </Form>
      </Formik>
      {(totalExpenses || totalIncome) && (
        <>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Sum</th>
              </tr>
            </thead>
            <tbody>
              {totalCategories.map(category => (
                <tr key={category.id}>
                  <td>
                    <div
                      style={{
                        backgroundColor: category.color,
                        width: '30px',
                        height: '30px',
                      }}
                    ></div>
                  </td>
                  <td>{category.title}</td>
                  <td>{category.total ? category.total : 0}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>{`Expenses: ${totalExpenses}`}</p>
          <p>{`Income: ${totalIncome}`}</p>
        </>
      )}
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
