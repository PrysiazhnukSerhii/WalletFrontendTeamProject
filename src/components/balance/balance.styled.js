import styled from 'styled-components';

export const BalanceContainer = styled.div`
  background-color: var(--secondary-text-color);
  border-radius: 30px;
   margin-bottom: 32px;
  padding: 11px 32px;
   width: 100%;

    margin-right: auto;
    margin-left: auto;
  
   @media screen and (min-width: 376px) {
  width: 336px;
  }

 

  font-family: 'Circe;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    text-transform: uppercase;

  color: #A6A6A6;

 
  @media screen and (min-width: 768px) {
    margin-top: 12px;
    // padding: 0px 40px;
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

export const BalanceStyled = styled.span`
  // margin-top: 12px;
  color: var(--primary-text-color);
  font-size: 30px;

  line-height: 1.5;
`;
