import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';

import Media from 'react-media';
import {
  Section,
  ContainerDashboard,
  Container,
  MainPage,
} from './dashboardPage.styled';
import Dashboard from '../../components/dashboard/dashboard';

export function DashboardPage() {
  return (
    <>
      <Header />
      <MainPage>
        <Media
          query="(max-width: 767px)"
          render={() => (
            <Container>
              <ContainerDashboard>
                <Dashboard />
              </ContainerDashboard>
              <Outlet />
            </Container>
          )}
        />
        <Media
          query="(min-width: 768px)"
          render={() => (
            <Section>
              <Container>
                <ContainerDashboard>
                  <Dashboard />
                  <Outlet />
                </ContainerDashboard>
              </Container>
            </Section>
          )}
        />
      </MainPage>
    </>
  );
}
