import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Sidebar from './components/Sidebar/Sidebar';
import Inbox from './modules/Inbox/Inbox';
import Todo from './modules/Todo/Todo';



class App extends Component {

  render() {
    return (
      <div className="App">

        <Sidebar />
        
        <Route path="/inbox" component={ Inbox } />
        <Route path="/todo" component={ Todo } />

      </div>
    );
  }

}

export default App;
