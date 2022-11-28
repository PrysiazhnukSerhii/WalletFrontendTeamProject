import { Header } from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Currency } from '../../components/currency/Currency';
import Media from 'react-media';
import {
  Section,
  ContainerDashboard,
  Container,
  MainPage,
} from './dashboardPage.styled';
import { Dashboard } from '../../components/dashboard/dashboard';

export function DashboardPage() {
  return (
    <>
      <Header />
      <Currency />
      <Outlet />
    </>
  );
}
