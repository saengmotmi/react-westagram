import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from './pages/Login/Login';
import Feed from './pages/Feed/Feed';


class Routes extends Component {
    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Feed} />
                    <Route exact path="/login" component={Login} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;