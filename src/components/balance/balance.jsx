import { BalanceContainer, BalanceText, BalanceStyled } from './balance.styled';
// import { useGetUserInformationQuery } from 'redux/authSlice';

const Balance = () => {
  // const { data } = useGetUserInformationQuery();

  const data = 'test';

  return (
    <BalanceContainer>
      <BalanceText>your balance</BalanceText>
      <BalanceStyled>
        &#8372; <b>{data}</b>
      </BalanceStyled>
    </BalanceContainer>
  );
};

export default Balance;
