import React, { Fragment } from 'react';
import { useState } from 'react';
import Logo from '../Logo/Logo';
import sprite from '../../images/svg/symbol-defs.svg';
import ModalLogOut from '../../components/ModalLogOut/ModalLogOut';

// import { useDispatch, useSelector } from 'react-redux';

import Media from 'react-media';
// import { authSelectors } from 'redux/auth';

import {
  HeaderStyled,
  UserMenuWrapper,
  UserName,
  LogoExit,
  LogoText,
  LogoutBtn,
  Link,
} from './Header.styled';

export const Header = () => {
  // const dispatch = useDispatch();
  // const name = useSelector(authSelectors.selectUser);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <HeaderStyled>
      <Link to="/">
        <Logo />
        <LogoText>Wallet</LogoText>
      </Link>

      <UserMenuWrapper>
        <UserName>Name</UserName>
        <LogoutBtn type="button" onClick={openModal}>
          <LogoExit>
            <use href={`${sprite}#icon-logout`} />
          </LogoExit>
          <Media
            queries={{
              small: '(max-width: 767px)',
              medium: '(min-width: 768px) and (max-width: 1199px)',
              large: '(min-width: 1200px)',
            }}
          >
            {matches => (
              <Fragment>
                {matches.medium && <p>Exit</p>}
                {matches.large && <p>Exit</p>}
              </Fragment>
            )}
          </Media>
        </LogoutBtn>
        {isModalOpen && <ModalLogOut onClickClose={closeModal}></ModalLogOut>}
      </UserMenuWrapper>
    </HeaderStyled>
  );
};
