import React from 'react';
import RegistrationForm from '../../components/registrationForm';
<<<<<<< HEAD
import '../loginPage/loginPage.scss';
=======
import '../registrationPage/registerPage.scss';
import { ContainerWrapper, PageText } from './register.styled';
>>>>>>> dev

const RegistrationPage = () => {
  return (
    <div>
      <ContainerWrapper>
        <PageText>Finance App</PageText>
        <RegistrationForm />
      </ContainerWrapper>
    </div>
  );
};

export default RegistrationPage;
