import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Module from './module/';
import Main from './main/';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/module" component={Module} />
  </Switch>
);

export default Routes;
