import { BalanceContainer, BalanceText, BalanceStyled } from './balance.styled';

const Balance = () => {
  return (
    <BalanceContainer>
      <BalanceText>your balance</BalanceText>
      <BalanceStyled>
        &#8372; <b>0.00</b>
      </BalanceStyled>
    </BalanceContainer>
  );
};

export default Balance;
