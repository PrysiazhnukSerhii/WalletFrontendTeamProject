import { Outlet } from 'react-router-dom';
import Dashboard from 'components/Dashboard/Dashboard';
import Media from 'react-media';

export function DashboardPage() {
  return (
    <div>
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
    </div>
  );
}
