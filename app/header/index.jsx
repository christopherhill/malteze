import React from 'react';
import Logo from './../../assets/bone-logo.svg';
import './header.scss';

const Header = () => (
  <nav className="navbar">
    <div className="navbar-brand">
      <a className="navbar-item" href="http://malteze.com">
        <Logo height="50" />
        <h1 className="title">Malteze</h1>
      </a>
    </div>
  </nav>
);

export default Header;
