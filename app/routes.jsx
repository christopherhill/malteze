import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Module from './module/';
import Main from './main/';
import Veterinarians from './veterinarians/';
import Products from './products/';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/module" component={Module} />
    <Route path="/veterinarians" component={Veterinarians} />
    <Route path="/grooming" render={() => (<Products type={['grooming']} />)} />
    <Route path="/books" render={() => (<Products type={['books']} />)} />
    <Route path="/food" render={() => (<Products type={['food', 'treats']} />)} />
    <Route path="/beds" render={() => (<Products type={['bedding', 'crate', 'car seat']} />)} />
    <Route path="/toys" render={() => (<Products type={['toys']} />)} />
    <Route path="/health" render={() => (<Products type={['health']} />)} />
    <Route path="/training" render={() => (<Products type={['training']} />)} />
    <Route path="/supplies" render={() => (<Products type={['supplies']} />)} />
    <Route path="/outdoor" render={() => (<Products type={['outdoor']} />)} />
  </Switch>
);

export default Routes;
