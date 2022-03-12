import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));
const Problems = lazy(() => import('./problems/Problem'));
const Inovation = lazy(() => import('./inovation/Inovation'));
const DetailsView = lazy(() => import('./inovation/DetailsView'));
const Solution = lazy(() => import('./solution/Solution'));
const Investment = lazy(() => import('./investment/Investment'));
const Login = lazy(() => import('./user-pages/Login'));
const Register = lazy(() => import('./user-pages/Register'));






class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/dashboard" component={ Dashboard } />
          <Route exact path="/problems" component={ Problems } />
          <Route exact path="/inovation" component={ Inovation } />
          <Route exact path="/solution" component={ Solution } />
          <Route  path="/detailsView" component={ DetailsView } />
          <Route  path="/investment" component={ Investment } />
          <Route  path="/login" component={ Login } />
          <Route  path="/register" component={ Register } />


          <Redirect to="/login" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;