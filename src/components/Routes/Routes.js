import React from 'react';
import Home from '../../pages/home/home';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { baseUrl, consultantUrl, homeUrl, smartphoneUrl } from './Routes.strings';
import SmartPhone from "../../pages/Smartphone/smartphone";

const history = createBrowserHistory();

const Routes = () => {

  return (
    <Router history={history}>
      <Switch>
        <Route exact path={baseUrl}>
          <Redirect to={homeUrl} />
        </Route>
        <Route path={homeUrl}>
          <Home />
        </Route>
        <Route path={consultantUrl}>
        </Route>
        <Route path={smartphoneUrl}>
          <SmartPhone />
        </Route>
      </Switch>
    </Router>
  )
};
export default Routes;