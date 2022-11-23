import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  padding: 15px 20px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary-background-color);

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 20px 32px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    width: 1280px;
    padding: 20px 16px;
  }
`;

export const Link = styled(NavLink)`
  display: inline-flex;
  padding-right: 20px;
`;

export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UserName = styled.p`
  display: flex;
  align-items: center;
  padding: 3px 12px;
  border-right: 2px solid #bdbdbd;
  font-family: 'Circe';
  font-size: 18px;
  color: #bdbdbd;

  @media screen and (max-width: 767px) {
    border-right: none;
    padding-right: 0px;
  }
`;

export const LogoExit = styled.svg`
  width: 18px;
  height: 18px;
  margin-right: 8px;

  @media screen and (max-width: 767px) {
    margin-right: 0px;
  }
`;

export const LogoutBtn = styled.button`
  font-family: 'Circe';
  font-size: 18px;
  color: #bdbdbd;
  display: flex;
  align-items: stretch;
  padding: 4px 12px;
  border-color: transparent;
  background-color: transparent;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover:not(:active),
  &:focus-visible:not(:active) {
    color: var(--accent-color-grean);
    background: rgba(177, 186, 196, 0.12);
  }

  @media screen and (max-width: 767px) {
    padding: 4px 8px;
  }
`;

export const LogoText = styled.p`
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 30px;
  line-height: 45px;
  margin-left: 20px;
  color: var(--primary-text-color);
`;
