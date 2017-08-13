import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <a className="navbar-item" href="http://bulma.io">
            <img 
              src="http://bulma.io/images/bulma-logo.png" 
              alt="Malteze: Your destination for the best in Maltese products and services." 
              width="112" height="28" />
          </a>
          <div className="navbar-burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
