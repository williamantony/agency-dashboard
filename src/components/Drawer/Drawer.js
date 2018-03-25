import React, { Component } from 'react';
import './Drawer.css';
import Hamburger from '../Hamburger/Hamburger';

class Drawer extends Component {

  render() {
    return (
      <div className="Drawer">
        <Hamburger />
        <div className="AppLauncher">
          <div className="AppLauncher__Icon" />
          <div className="AppLauncher__Name">Inbox</div>
        </div>
        <div className="AppLauncher">
          <div className="AppLauncher__Icon" />
          <div className="AppLauncher__Name">Inbox</div>
        </div>
        <div className="AppLauncher">
          <div className="AppLauncher__Icon" />
          <div className="AppLauncher__Name">Inbox</div>
        </div>
      </div>
    );
  }

}

export default Drawer;
