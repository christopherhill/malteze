import React from 'react';
import Logo from './../../assets/animal-paw-print.svg';
import { EmailList } from './../../../react-components/';

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <EmailList postUrl="" />
        <img src="./../assets/maltese-in-grass.jpg" />
      </div>
    );
  }
}

export default Main;
