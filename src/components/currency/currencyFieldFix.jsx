import React from 'react';

export const CurrencyField = ({ currency, purchaseValue, saleValue }) => {
  function minTwoDigits(n) {
    return (n < 10 ? '0' : '') + n;
  }

  const sale = minTwoDigits(saleValue.toFixed(2));
  const purchase = minTwoDigits(purchaseValue.toFixed(2));
  return (
    <div className="CurrencyField">
      <li className="currencyFieldContainer">
        <p className="currencyFieldItem">{currency}</p>
        <p className="currencyFieldItem">{purchase}</p>
        <p className="currencyFieldItem">{sale}</p>
      </li>
    </div>
  );
};
