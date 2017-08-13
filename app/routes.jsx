import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Module from './module/';

const Routes = () => (
  <Switch>
    <Route exact path="/module" component={Module} />
  </Switch>
);

export default Routes;
