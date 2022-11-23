import Navigation from 'components/navigation/Navigation';
import Media from 'react-media';
import Balance from 'components/balance/Balance';
import { DashboardContainer, Wrap } from './Dashboard.styled';
import Currency from 'components/currency/Currency';

const Dashboard = () => {
  return (
    <Wrap>
      <DashboardContainer>
        <Navigation />
        <Media query="(min-width: 768px)" render={() => <Balance />} />
      </DashboardContainer>
      <Media query="(min-width: 768px)" render={() => <Currency />} />
    </Wrap>
  );
};
export default Dashboard;
