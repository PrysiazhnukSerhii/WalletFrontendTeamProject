import { Outlet } from 'react-router-dom';
import Media from 'react-media';
import { Section, ContainerDashboard, MainPage } from './DashboardPage.styled';
import Dashboard from 'components/dashboard/Dashboard';

export function DashboardPage() {
  return (
    <MainPage>
      <h2> DashboardPage</h2>
      <Media
        query="(max-width: 1279px)"
        render={() => (
          <>
            <Section>
              <ContainerDashboard>
                <Dashboard />
              </ContainerDashboard>
            </Section>
            <Outlet />
          </>
        )}
      />
      <Media
        query="(min-width: 1280px)"
        render={() => (
          <Section>
            <ContainerDashboard
              style={{ display: 'flex', paddingBottom: '47px' }}
            >
              <Dashboard />

              <Outlet />
            </ContainerDashboard>
          </Section>
        )}
      />
    </MainPage>
  );
}
