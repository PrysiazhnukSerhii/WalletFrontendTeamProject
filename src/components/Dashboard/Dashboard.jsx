import Navigation from 'components/navigation/navigation';
import Media from 'react-media';
import Balance from 'components/balance/balance';
import { DashboardContainer, Wrapper } from './dashboard.styled';
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
