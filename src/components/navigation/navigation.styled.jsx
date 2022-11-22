import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
           text-decoration: none;
           font-family: 'Poppins', sans-serif;
           font-weight: 400;
           color: #000000;
         @media screen and (min-width: 768px) {
           display: flex;
           align-items: center;
           gap: 12px;
           font-size: 18px;
           line-height: 1.5;
           
         }

         &.active {
           font-weight: 700;
           & svg {
             filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
             background-color: ;
           }
         }
         &:hover {
           transform: scale(1.05);
           & svg {
             background-color: ;
           }
         }
           svg {
             display: block;
             height: 38px;
             width: 38px;
             filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
           
             
             @media screen and (min-width: 768px) {
               width: 24px;
               height: 24px;

           }
           `;

export const NavStyled = styled.nav`
  @media screen and (max-width: 767px) {
    position: fixed;
    // backdrop-filter: blur(25px);
    left: 0;
    right: 0;
    // z-index: 5;
    top: 72px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 35px;
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
