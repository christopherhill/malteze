import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Header from './header/';
import Footer from './footer/';
import { Sidebar, SidebarItem } from './../../react-components/';

import svg from './../assets/sample.svg';
import './app.scss';

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <div className="left-pane">
        <Sidebar>
          <SidebarItem index={1} Icon={svg} description="Hello" link="#" />
          <SidebarItem index={2} Icon={svg} description="Item2" link="#" />
          <SidebarItem index={3} Icon={svg} description="Hello" link="#" />
          <SidebarItem index={4} Icon={svg} description="Item2" link="www.cnn.com" />
        </Sidebar>
      </div>
      <div className="right-pane">
        {Routes}
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.querySelector('.application'));
