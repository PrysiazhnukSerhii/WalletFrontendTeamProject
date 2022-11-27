import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';

export function DashboardPage() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
