import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  color: var(--primary-text-color);

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 17px;
    font-size: 18px;
    line-height: 1.5;
  }

  svg {
    display: block;
    height: 38px;
    width: 38px;
    border-radius: 6px;
    padding: 8px;

    background-color: var(--background-icons-color);
    fill: var(--secondary-text-color);

    @media screen and (min-width: 768px) {
      width: 24px;
      height: 24px;
      padding: 5px;
    }
  }
  &.active {
    font-weight: 700;
    & svg {
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
      background-color: var(--accent-color-blue);
    }
  }
  &:hover {
    transform: scale(1.05);
    & svg {
      background-color: var(--accent-color-blue);
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
        border 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
`;

export const NavStyled = styled.nav`
  @media screen and (max-width: 767px) {
    position: fixed;
    left: 0;
    right: 0;
    top: 12px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 32px;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: start;
    gap: 12px;
  }
  @media screen and (max-width: 767px) {
    width: 200px;
    margin: 0 auto;
  }
`;
