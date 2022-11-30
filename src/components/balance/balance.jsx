import { BalanceContainer, BalanceText, BalanceStyled } from './balance.styled';
import { useGetUserInformationQuery } from 'redux/authSlice';

const Balance = () => {
  const { data } = useGetUserInformationQuery();
  console.log(data);
  return (
    <BalanceContainer>
      <BalanceText>your balance</BalanceText>
      <BalanceStyled>
        &#8372; <b>{data.balance}</b>
      </BalanceStyled>
    </BalanceContainer>
  );
};

export default Balance;
