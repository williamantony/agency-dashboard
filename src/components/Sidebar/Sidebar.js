import React, { Component } from 'react';
import './Sidebar.css';
import SidebarHeader from '../SidebarHeader/SidebarHeader';

class Sidebar extends Component {

  render() {
    return (
      <div className="Sidebar">
        <SidebarHeader />
      </div>
    );
  }

}

export default Sidebar;
