import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Sidebar from './components/Sidebar/Sidebar';
import Inbox from './modules/Inbox/Inbox';
import Todo from './modules/Todo/Todo';
import Contacts from './modules/Contacts/Contacts';
import Calendar from './modules/Calendar/Calendar';



class App extends Component {

  render() {
    return (
      <div className="App">

        <Sidebar />
        
        <Route path="/inbox" component={ Inbox } />
        <Route path="/todo" component={ Todo } />
        <Route path="/contacts" component={ Contacts } />
        <Route path="/calendar" component={ Calendar } />

      </div>
    );
  }

}

export default App;
