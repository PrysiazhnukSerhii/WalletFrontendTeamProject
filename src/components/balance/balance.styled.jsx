import styled from 'styled-components';

export const BalanceContainer = styled.div`
  margin-top: 12px;
  margin-bottom: 32px;
  padding: 8px 32px 11px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 30px;

  @media screen and (min-width: 376px) {
    width: 336px;
  }

  @media screen and (min-width: 767px) {
    margin-top: 28px;
    margin-bottom: 0;
    padding-left: 40px;
    padding-right: 40px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
  }
`;

export const BalanceText = styled.p`
  font-family: 'Circe;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  text-transform: uppercase;
  color: #A6A6A6;
`;

export const BalanceStyled = styled.p`
  margin-top: 12px;
  color: #000000;
  font-size: 30px;

  //   line-height: calc(36 / 30);
`;
