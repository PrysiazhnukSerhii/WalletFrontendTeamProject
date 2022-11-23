import { Outlet } from 'react-router-dom';
import Dashboard from 'components/dashboard/Dashboard';
import Media from 'react-media';
import { Wrapper } from './DashboardPage.styled';

export function DashboardPage() {
  return (
    <Wrapper>
      <h2> DashboardPage</h2>
      <Media
        query="(max-width: 1279px)"
        render={() => (
          <>
            <Dashboard />
            <Outlet />
          </>
        )}
      />
      <Media
        query="(min-width: 1280px)"
        render={() => (
          <div style={{ display: 'flex', paddingBottom: '47px' }}>
            <Dashboard />
            <Outlet />
          </div>
        )}
      />
    </Wrapper>
  );
}
