import styled from 'styled-components';

export const Section = styled.section`
  box-sizing: border-box;
`;
export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  background-color: var(--background-light-grey);
  box-sizing: border-box;
  &.header-container {
    padding: 15px 20px;
    background-color: var(--white);
  }
  @media screen and (min-width: 320px) {
    width: 320px;
    padding: 0 20px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 0 15px;
  }
`;

export const ContainerWrapper = styled.div`
  display: flex;
`;
