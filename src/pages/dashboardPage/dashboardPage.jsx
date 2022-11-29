import { Header } from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';

import {
  Section,
  ContainerDashboard,
  Container,
  MainPage,
} from './dashboardPage.styled';
import { Dashboard } from '../../components/dashboard/dashboard';
// -----------------------
export function DashboardPage() {
  return (
    <>
      <Header />
      <MainPage>
          <Section>
          <Container>
            <ContainerDashboard>
              <Dashboard />
              <Outlet />
            </ContainerDashboard>
          </Container>
        </Section>
        
      </MainPage>
    </>
  );
}
