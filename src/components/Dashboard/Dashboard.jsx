import Navigation from 'components/navigation/Navigation';
import Media from 'react-media';
import Balance from 'components/balance/Balance';
import { DashboardContainer, Wrapper } from './Dashboard.styled';
import Currency from 'components/currency/Currency';

const Dashboard = () => {
  return (
    <Wrapper>
      <DashboardContainer>
        <Navigation />
        <Media query="(min-width: 768px)" render={() => <Balance />} />
      </DashboardContainer>
      <Media query="(min-width: 768px)" render={() => <Currency />} />
    </Wrapper>
  );
};
export default Dashboard;
