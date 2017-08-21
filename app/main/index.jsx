import React from 'react';
import Logo from './../../assets/animal-paw-print.svg';
import { EmailList } from './../../../react-components/';
import './main.scss';

class Main extends React.Component {
  render() {
    return (
      <div className="main container">
        {/* <EmailList postUrl="" /> */}
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h2 className="title has-text-centered has-text-white-ter">The Best Products and Resources for Maltese Dogs and their Owners</h2>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Main;
