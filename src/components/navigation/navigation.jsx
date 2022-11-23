import { StyledNavLink, NavList, NavStyled } from './Navigation.styled';

import Media from 'react-media';

import { ReactComponent as HomeIcon } from '../../images/svg/home.svg';
import { ReactComponent as StatisticsIcon } from '../../images/svg/diagram.svg';
import { ReactComponent as CurrencyIcon } from '../../images/svg/currency.svg';

const Navigation = () => {
  return (
    <NavStyled>
      <NavList>
        <li>
          <StyledNavLink to="homeTab" aria-label="home">
            <HomeIcon />
            <Media query="(min-width: 768px)" render={() => <p>Home</p>} />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="diagramTab" aria-label="diagramTab">
            <StatisticsIcon />
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
              <StyledNavLink
                to="currency"
                aria-label="currency"
                aria-current="page"
              >
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
