import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../containers/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../containers/LoginPage';
import CompanyPage from '../containers/CompanyPage';
import CompanyMembersPage from '../containers/CompanyMembersPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/signin" component={LoginPage} exact />
        <Route path="/dashboard" component={DashboardPage} exact />
        <Route path="/dashboard/company/:id" component={CompanyPage} ></Route>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
