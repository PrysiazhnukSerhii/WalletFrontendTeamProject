import styled from 'styled-components';

export const StatisticsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;

  @media screen and (max-width: 768px) {
    padding-top: 0;
  }

  @media screen and (min-width: 1279px) {
    padding-top: 30px;
    margin-left: 138px;
  }

  h2 {
    width: 100%;
    margin-bottom: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 45px;
  }

  p {
    width: 100%;
  }
`;
