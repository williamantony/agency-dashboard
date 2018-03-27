import React, { Component } from 'react';
import './Sidebar.css';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import SidebarDrawer from '../SidebarDrawer/SidebarDrawer';

class Sidebar extends Component {

  render() {
    return (
      <div className="Sidebar">
        <SidebarHeader />
        <SidebarDrawer />
      </div>
    );
  }

}

export default Sidebar;
