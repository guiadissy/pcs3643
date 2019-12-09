import React from 'react';
import Home from '../../pages/home/home';
import Consultant from '../../pages/Consultor/consultor';
import SmartPhone from "../../pages/Smartphone/smartphone";
import Login from "../../pages/login/login";
import register from "../../pages/register/register";
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { baseUrl, consultantUrl, homeUrl, smartphoneUrl,loginUrl,registerUrl } from './Routes.strings';

export const history = createBrowserHistory();

class Routes extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path={baseUrl}>
                        <Redirect to={homeUrl} />
                    </Route>
                    <Route path={homeUrl}>
                        <Home />
                    </Route>
                    <Route path={loginUrl}>
                        <Login history={history} />
                    </Route>
                    <Route path={registerUrl}>
                        <register history={history} />
                    </Route>
                    <Route path={consultantUrl}>
                        <Consultant />
                    </Route>
                    <Route path={smartphoneUrl}>
                        <SmartPhone history={history}/>
                    </Route>
                </Switch>
            </Router>
        )
    };
}
export default Routes;