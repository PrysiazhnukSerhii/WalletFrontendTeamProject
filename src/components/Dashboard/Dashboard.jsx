import Navigation from 'components/navigation/navigation';
import Media from 'react-media';
import Balance from '../balance/balance';
import { DashboardContainer, Wrapper } from './dashboard.styled';
import Currency from '../currency/Currency';

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
