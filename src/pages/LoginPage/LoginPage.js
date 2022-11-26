import React from 'react';
import LoginForm from '../../components/LoginForm';
import './LoginPage.scss';

import AddTransactionButton from '../../components/addTransaction/addTransactionButton/addTransactionButton'

const LoginPage = () => {
  return (
    <div>
      <div className="page_wrapper">
        <p className="page_text">Finance App</p>
        <LoginForm />
        <AddTransactionButton/>
      </div>
    </div>
  );
};

export default LoginPage;
