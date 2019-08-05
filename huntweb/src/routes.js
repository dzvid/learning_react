import React from 'react';

//Router dom components
// BrowserRouter; defines that we are using the routes through a browser
// Switch: Defines that only one route can be called each time, in this case it is configured
// to only show one webpage for each route (a webpage can have many components)
// <Route path="/" component={ Main }></Route>: When the user access the root, the app loads the Main component

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Main }/>
            <Route path="/products/:id" component={ Product } />
        </Switch>
    </BrowserRouter>
);

export default Routes;