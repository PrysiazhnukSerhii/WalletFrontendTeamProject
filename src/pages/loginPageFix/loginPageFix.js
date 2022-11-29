import React from 'react';
import LoginForm from '../../components/loginFormFix';
import './loginPageFix.scss';

const LoginPage = () => {
  return (
    <div>
      <div className="page_wrapper">
        <p className="page_text">Finance App</p>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
