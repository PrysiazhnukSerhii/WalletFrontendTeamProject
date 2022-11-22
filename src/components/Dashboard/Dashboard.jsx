import Navigation from 'components/Navigation/Navigation';
import Media from 'react-media';
import Balance from 'components/Balance/Balance';
import { DashboardContainer, Wrap } from './Dashboard.styled';

const Dashboard = () => {
  return (
    <Wrap>
      <DashboardContainer>
        <Navigation />
        <Media query="(min-width: 768px)" render={() => <Balance />} />
      </DashboardContainer>
      {/* <Media query="(min-width: 768px)" render={() => <Currency />} /> */}
    </Wrap>
  );
};
export default Dashboard;
