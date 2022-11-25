import { Outlet } from 'react-router-dom';
import Dashboard from 'components/dashboard/Dashboard';
import Media from 'react-media';
import { Section, Container } from './DashboardPage.styled';

export function DashboardPage() {
  return (
    <>
      <h2> DashboardPage</h2>
      <Media
        query="(max-width: 1279px)"
        render={() => (
          <>
            <Section>
              <Container>
                <Dashboard />
              </Container>
            </Section>
            <Outlet />
          </>
        )}
      />
      <Media
        query="(min-width: 1280px)"
        render={() => (
          <Section>
            <Container style={{ display: 'flex', paddingBottom: '47px' }}>
              <Dashboard />
              <Outlet />
            </Container>
          </Section>
        )}
      />
    </>
  );
}
