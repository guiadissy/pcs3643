import React from 'react';
import Home from './pages/home/home';
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/consultant">
        </Route>
        <Route path="/smartphone">
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
