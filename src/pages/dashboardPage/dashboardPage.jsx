import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { CurrencyRates } from 'components/currencyRates/CurrencyRates';

export function DashboardPage() {
  return (
    <div>
      <Header />
      <CurrencyRates />
      <Outlet />
    </div>
  );
}
