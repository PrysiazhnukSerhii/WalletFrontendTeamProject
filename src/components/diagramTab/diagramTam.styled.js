import styled from 'styled-components';

export const StatisticsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  padding-top: 32px;
  @media screen and (max-width: 767px) {
    padding-top: 80px;
  }
  @media screen and (min-width: 1279px) {
    margin-left: 138px;
  }

  h2 {
    width: 100%;
    margin-bottom: 20px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 45px;
  }
`;
