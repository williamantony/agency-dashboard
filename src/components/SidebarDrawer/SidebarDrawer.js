import React, { Component } from 'react';
import './SidebarDrawer.css';

class SidebarDrawer extends Component {

  render() {
    return (
      <div className="SidebarDrawer">

        <div className="SidebarDrawer__item">
          <div className="SidebarDrawer__item__icon">
            <div className="img" />
          </div>
          <div className="SidebarDrawer__item__text">
            Inbox
          </div>
        </div>

        <div className="SidebarDrawer__item">
          <div className="SidebarDrawer__item__icon">
            <div className="img" />
          </div>
          <div className="SidebarDrawer__item__text">
            Contacts
          </div>
        </div>

        <div className="SidebarDrawer__item">
          <div className="SidebarDrawer__item__icon">
            <div className="img" />
          </div>
          <div className="SidebarDrawer__item__text">
            Calendar
          </div>
        </div>

        <div className="SidebarDrawer__item">
          <div className="SidebarDrawer__item__icon">
            <div className="img" />
          </div>
          <div className="SidebarDrawer__item__text">
            To do
          </div>
        </div>

        <div className="SidebarDrawer__item">
          <div className="SidebarDrawer__item__icon">
            <div className="img" />
          </div>
          <div className="SidebarDrawer__item__text">
            Invoices
          </div>
        </div>

        <div className="SidebarDrawer__item">
          <div className="SidebarDrawer__item__icon">
            <div className="img" />
          </div>
          <div className="SidebarDrawer__item__text">
            Support
          </div>
        </div>

      </div>
    );
  }

}

export default SidebarDrawer;
