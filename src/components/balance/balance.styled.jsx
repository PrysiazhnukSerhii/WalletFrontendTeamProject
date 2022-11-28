import styled from 'styled-components';

export const BalanceContainer = styled.div`
  background-color: var(--secondary-text-color);
  border-radius: 30px;
  margin-top: 28px;
  margin-bottom: 32px;
  padding: 11px 32px;

  font-family: 'Circe;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    text-transform: uppercase;

  color: #A6A6A6;

  @media screen and (min-width: 376px) {
  width: 336px;
  }

  @media screen and (min-width: 767px) {
    margin-top: 12px;
    // margin-bottom: 0;
    width: 256px;
    // padding: 0px 40px;
  }

  @media screen and (min-width: 1280px) {
  width: 315px;
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

export const BalanceStyled = styled.span`
  // margin-top: 12px;
  color: var(--primary-text-color);
  font-size: 30px;

  line-height: 1.5;
`;
