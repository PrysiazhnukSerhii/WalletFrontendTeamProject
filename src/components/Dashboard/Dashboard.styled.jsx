import styled from 'styled-components';

export const DashboardContainer = styled.div`
  @media screen and (min-width: 768px) {
    padding-top: 8px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 32px;
    padding-top: 0;

    
  }
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    gap: 32px;
    padding-top: 32px;
    padding-bottom: 10px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 40px;
    padding-bottom: 47px;
    padding-right: 68px;
  }
`;
