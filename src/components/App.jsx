import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGetUserInformationQuery } from '../redux/authSlice';

import PrivatRoutes from './protectedRoutes/privatRoutes';
import PublicRoutes from './protectedRoutes/publicRoutes';

import LoginPage from '../pages/LoginPage';
import { DashboardPage } from '../pages/dashboardPage/dashboardPage';
import { RegistrationPage } from '../pages/registrationPage/registrationPage';
import { DiagramTab } from './diagramTab/diagramTab';
import { HomeTab } from './homeTab/homeTab';

import { TakeInfUser } from './takeInfUser/takeInfUser';

import React from 'react';

export const App = () => {
  let token = useSelector(state => state.userInformation.token);

  if (token) {
    useGetUserInformationQuery();
  }
  return (
    <>
      {token ? <TakeInfUser /> : <></>}
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route element={<PrivatRoutes />}>
          <Route path="/dashboard" element={<DashboardPage />}>
            <Route path="homeTab" element={<HomeTab />} />
            <Route path="diagramTab" element={<DiagramTab />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};
