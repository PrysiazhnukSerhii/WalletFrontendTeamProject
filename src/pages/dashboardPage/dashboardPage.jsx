import { Header } from '../../components/header/header';
import { Outlet } from 'react-router-dom';
// import Media from 'react-media';

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
      <MainPage>
        {/*        
            <Container>
              <ContainerDashboard>
                <Dashboard />
                <Outlet />
              </ContainerDashboard>
            </Container>
         */}

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
