import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Module from './module/';
import Main from './main/';
import Veterinarians from './veterinarians/';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/module" component={Module} />
    <Route path="/veterinarians" component={Veterinarians} />
  </Switch>
);

export default Routes;
