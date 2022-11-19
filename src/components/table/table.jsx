// Верстка мобилка, планшет, десктоп
// Stateless компонент получает массив для рендера и
// методы для фильтрации на селекты

export function Table() {
  // props: {[filteredTransactions(category, sum)],
  // totalExpenses,
  // totalIncome
  // },
  // getByMonthOrYear,
  const currentYear = new Date().getFullYear();
  console.log(currentYear);
  let yearOptions = [];
  for (let i = 2017; i <= currentYear; i += 1) {
    yearOptions.push(i);
  }
  console.log(yearOptions);

  return (
    <>
      <p>SelectorsTable</p>
      <div>
        <p>TableHeader</p>
        <p>TableData</p>
      </div>
      <p>Expenses:</p>
      <p>Income:</p>
    </>
  );
}

/* <Field name="month" as="select">
  <option value="1">January</option>
  <option value="2">February</option>
  <option value="3">March</option>
</Field>; 
<Field name="year" as="select">
  yearOptions.map(year => (<option value="year">year</option>))
</Field>; */
