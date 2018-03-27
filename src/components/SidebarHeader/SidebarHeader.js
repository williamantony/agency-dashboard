import React, { Component } from 'react';
import './SidebarHeader.css';
import Hamburger from '../Hamburger/Hamburger';
import SidebarLogo from '../SidebarLogo/SidebarLogo';

class SidebarHeader extends Component {

  render() {
    return (
      <div className="SidebarHeader">
        <SidebarLogo />
        <Hamburger />
      </div>
    );
  }

}

export default SidebarHeader;
