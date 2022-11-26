import { Outlet } from 'react-router-dom';
import Media from 'react-media';
import { Section, ContainerDashboard, Container } from './DashboardPage.styled';
import Dashboard from 'components/dashboard/Dashboard';

export function DashboardPage() {
  return (
    <>
      <Media
        query="(max-width: 1279px)"
        render={() => (
          <Section>
            <Container>
              <ContainerDashboard>
                <Dashboard />
              </ContainerDashboard>
              <Outlet />
            </Container>
          </Section>
        )}
      />
      <Media
        query="(min-width: 1280px)"
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
    </>
  );
}
