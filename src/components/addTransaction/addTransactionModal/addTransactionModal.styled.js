import styled from 'styled-components';

export const Backdrop = styled.div`
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.25);
  }
`;

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--primary-background-color);
  z-index: 10;
  padding: 20px 0 55px 0;

  @media screen and (max-width: 767px) {
    width: 100vw;
    height: 100vh;
  }
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 540px;
    min-height: 500px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    padding-bottom: 60px;
  }
  @media screen and (min-width: 1280px) {
    width: 500px;
    min-height: 500px;
    border-radius: 20px;
  }
`;

export const TransactionFormButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 0 auto;
  min-width: 300px;
  min-height: 50px;
  padding: 0;
  border-radius: 20px;
  border: ${props =>
    props.primary
      ? '1px solid var(--accent-color-grean)'
      : '1px solid var(--accent-color-blue)'};
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  background-color: ${props =>
    props.primary ? 'var(--accent-color-grean)' : 'transparent'};
  color: ${props =>
    props.primary ? 'var(--secondary-text-color)' : 'var(--accent-color-blue)'};
  transition: background-color 250ms linear;

  &:hover {
    background-color: ${props =>
      props.primary ? '#20b091' : 'var(--secondary-background-color)'};
  }
`;

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  position: fixed;
  top: 20px;
  right: 20px;
  border-radius: 100%;
  background-color: var(--primary-background-color);
  border: 0;
  &:hover {
    box-shadow: 0px 0px 5px var(--accent-color-grean);
  }
`;
