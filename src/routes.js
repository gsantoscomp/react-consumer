import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeScreen from './screens/home-screen';
import TestScreen from './screens/test-screen';

const Routes = () => {

    return  (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomeScreen}/>
                <Route exact path="/test" component={TestScreen}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;