import React, { FC } from 'react';
import { Switch, Route, Redirect, Router } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { EmployeesList } from 'pages/Employees/EmployeesList';
import { Styleguide } from 'pages/Styleguide';
import { Login } from 'pages/Login';
import { Algo } from 'pages/Algorithm';
import { routes } from 'utils/routes';
import history from 'utils/history';

export const Routes: FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Redirect to={routes.home} />
        </Route>
        <Route exact path={routes.login} component={Login} />
        <Route path={routes.home} component={HomePage} />
        <Route path={routes.employee} component={EmployeesList} />
        <Route path={routes.styleguide} component={Styleguide} />
        <Route path={routes.algorithm} component={Algo} />
      </Switch>
    </Router>
  );
};
