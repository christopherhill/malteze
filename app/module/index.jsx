import React from 'react';
import { Sidebar, SidebarItem } from './../../../react-components/';

debugger
import './module.scss';
import svg from './../../assets/sample.svg';

const Module = () =>
  (
    <div className="module">
      <Sidebar>
        <SidebarItem index={1} Icon={svg} description="Hello" link="#" />
        <SidebarItem index={2} Icon={svg} description="Item2" link="#" />
        <SidebarItem index={3} Icon={svg} description="Hello" link="#" />
        <SidebarItem index={4} Icon={svg} description="Item2" link="www.cnn.com" />
      </Sidebar>
    </div>
  );

export default Module;
