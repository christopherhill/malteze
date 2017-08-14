import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Header from './header/';
import Footer from './footer/';
import { Sidebar, SidebarItem } from './../../react-components/';

import home from './../assets/menu-paw.svg';
import food from './../assets/menu-food.svg';
import beds from './../assets/menu-beds.svg';
import toys from './../assets/menu-toys.svg';
import clothing from './../assets/menu-clothing.svg';
import grooming from './../assets/menu-grooming.svg';
import health from './../assets/menu-health.svg';
import training from './../assets/menu-training.svg';
import directory from './../assets/menu-directory.svg';

import './app.scss';

const colors = [
  '#ff9800',
  '#e91e63',
  '#f44336',
  '#9c27b0',
  '#03a9f4',
  '#4caf50',
  '#8bc34a',
  '#607d8b',
  '#ffffff',
];

const App = () => (
  <BrowserRouter>
    <div style={{ width: '100%' }}>
      <Header />
      <div className="columns is-gapless">
        <div className="column is-1">
          <Sidebar>
            <SidebarItem index={1} Icon={home} color={colors[0]} description="Home" link="/" />
            <SidebarItem index={2} Icon={food} color={colors[1]} description="Food" link="/food" />
            <SidebarItem index={3} Icon={beds} color={colors[2]} description="Beds" link="/beds" />
            <SidebarItem index={4} Icon={toys} color={colors[3]} description="Toys" link="/toys" />
            <SidebarItem index={5} Icon={clothing} color={colors[4]} description="Clothing" link="/clothing" />
            <SidebarItem index={6} Icon={grooming} color={colors[5]} description="Grooming" link="/grooming" />
            <SidebarItem index={7} Icon={health} color={colors[6]} description="Health" link="/health" />
            <SidebarItem index={8} Icon={training} color={colors[7]} description="Training" link="/training" />
            <SidebarItem index={9} Icon={directory} color={colors[8]} description="Directory" link="/directory" />
          </Sidebar>
        </div>
        <div className="column is-11">
          <Routes />
        </div>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.querySelector('.application'));
