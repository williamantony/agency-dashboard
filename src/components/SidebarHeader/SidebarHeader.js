import React, { Component } from 'react';
import './SidebarHeader.css';
import Hamburger from '../Hamburger/Hamburger';
import ModuleName from '../ModuleName/ModuleName';

class SidebarHeader extends Component {

  render() {
    return (
      <div className="SidebarHeader">
        <ModuleName />
        <Hamburger />
      </div>
    );
  }

}

export default SidebarHeader;
