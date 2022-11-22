import { BalanceContainer, BalanceText, BalanceStyled } from './Balance.styled';

const Balance = () => {
  return (
    <BalanceContainer>
      <BalanceText>your balance</BalanceText>
      <BalanceStyled>
        &#8372; <b></b>
      </BalanceStyled>
    </BalanceContainer>
  );
};

export default Balance;
