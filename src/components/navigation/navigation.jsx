import { StyledNavLink, NavList, NavStyled } from './navigation.styled';

import Media from 'react-media';

import { ReactComponent as HomeIcon } from '../../images/svg/home.svg';
import { ReactComponent as StatisticsIcon } from '../../images/svg/diagram.svg';
import { ReactComponent as CurrencyIcon } from '../../images/svg/currency.svg';
import { AiFillHome } from 'react-icons/ai';
import sprite from '../../images/svg/symbol-defs.svg';
import { height } from 'styled-system';

const Navigation = () => {
  return (
    <NavStyled>
      <NavList>
        <li>
          <StyledNavLink to="homeTab" aria-label="home">
            <AiFillHome fill='#fff' padding="2px"/>
            {/* <HomeIcon /> */}
            <Media query="(min-width: 768px)" render={() => <p>Home</p>} />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="diagramTab" aria-label="diagramTab">
            {/* <StatisticsIcon /> */}
            <div style={{ width: "38px", height: "38px"} }>
            <svg width="26px" height="14px">
                <use href={`${sprite}#icon-diagrama`} />
              </svg>
            </div>
            <Media
              query="(min-width: 768px)"
              render={() => <p>Statistics</p>}
            />
          </StyledNavLink>
        </li>
        <li>
          <Media
            query="(max-width: 767px)"
            render={() => (
              <StyledNavLink to="currency" aria-label="currency">
                <CurrencyIcon />
              </StyledNavLink>
            )}
          />
        </li>
      </NavList>
    </NavStyled>
  );
};

export default Navigation;
