import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SidebarDrawer.css';

class SidebarDrawer extends Component {

  state = {
    modules: [
      {
        name: 'Inbox',
        path: '/inbox',
        icon: '#',
      },
      {
        name: 'Contacts',
        path: '/contacts',
        icon: '#',
      },
      {
        name: 'Calendar',
        path: '/calendar',
        icon: '#',
      },
      {
        name: 'To do',
        path: '/todo',
        icon: '#',
      },
      {
        name: 'Invoices',
        path: '/invoices',
        icon: '#',
      },
      {
        name: 'Support',
        path: '/support',
        icon: '#',
      },
    ]
  }

  render() {
    return (
      <div className="SidebarDrawer">
        {
          this.state.modules.map(module => {
            return (

              <Link to={ module.path }>
                <div className="SidebarDrawer__item">
                  <div className="SidebarDrawer__item__icon">
                    <div className="img" />
                  </div>
                  <div className="SidebarDrawer__item__text">
                    { module.name }
                  </div>
                </div>
              </Link>

            );
          })
        }
      </div>
    );
  }

}

export default SidebarDrawer;
