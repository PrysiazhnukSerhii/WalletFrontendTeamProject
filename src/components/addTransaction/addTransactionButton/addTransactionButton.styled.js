import styled from 'styled-components';

export const TransactionButton = styled.button`
  width: 44px;
  height: 44px;
  z-index: 2;
  position: fixed;
  background-color: #24cca7;
  color: #ffffff;
  padding: 12px;
  border-radius: 100%;
  bottom: 20px;
  right: 20px;
  border: 0;
  box-shadow: 0 10px 10px -7px #24cca7;
  @media (min-width: 768px) {
    bottom: 40px;
    right: 40px;
  }
`;
