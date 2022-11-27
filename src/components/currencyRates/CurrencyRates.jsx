import { useEffect, useState } from 'react';
import { CurrencyRatesField } from './CurrencyRatesField';
import './currencyRates.scss';
import axios from 'axios';
import BarLoader from 'react-spinners/BarLoader';

export const CurrencyRates = () => {
  const [rateUsd, setRateUsd] = useState(null);
  const [rateEur, setRateEur] = useState(null);
  const [rateRub, setRateRub] = useState(0);

  const saveRates = data => {
    data.filter(el => {
      if (el.currencyCodeA === 840 && el.currencyCodeB === 980) {
        const dataToSave = {
          rateBuy: el.rateBuy,
          rateSell: el.rateSell,
        };
        setRateUsd(dataToSave);
      }
      if (el.currencyCodeA === 978 && el.currencyCodeB === 980) {
        const dataToSave = {
          rateBuy: el.rateBuy,
          rateSell: el.rateSell,
        };
        setRateEur(dataToSave);
      }
    });
  };

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem('currencyRates'));
    const storageUpdatedTime = storageData?.updatedDate;
    const timeNow = new Date().getTime();
    const notShouldFetch = storageUpdatedTime - timeNow <= 3600000;

    if (!notShouldFetch) {
      axios
        .get('https://api.monobank.ua/bank/currency')
        .then(res => res.data)
        .then(res => {
          const currencyRates = {
            updatedDate: new Date().getTime(),
            res,
          };
          localStorage.setItem('currencyRates', JSON.stringify(currencyRates));
          saveRates(res);
        })
        .catch(error => console.log(error));
      return;
    }

    saveRates(storageData.res);
  }, []);

  return (
    <>
      <div className="currencyContainer">
        <div className="currencyTop">
          <ul className="currencyTitleList">
            <li className="currencyTitleItem">
              <p className="currencyTitle">Currency</p>
            </li>
            <li className="currencyTitleItem">
              <p className="currencyTitle">Purchase</p>
            </li>
            <li className="currencyTitleItem">
              <p className="currencyTitle">Sale</p>
            </li>
          </ul>
        </div>
        <div className="loadSpinner">
          <BarLoader color="#36d7b7" width={220} loading={!rateUsd?.rateBuy} />
        </div>
        {rateUsd?.rateBuy && (
          <div>
            <ul>
              <CurrencyRatesField
                currency="USD"
                purchaseValue={rateUsd?.rateBuy}
                saleValue={rateUsd?.rateSell}
              />
              <CurrencyRatesField
                currency="EUR"
                purchaseValue={rateEur?.rateBuy}
                saleValue={rateEur?.rateSell}
              />
              <CurrencyRatesField
                currency="RUB"
                purchaseValue={rateRub}
                saleValue={rateRub}
              />
            </ul>
          </div>
        )}

        <div className="currencyBg"></div>
      </div>
    </>
  );
};
