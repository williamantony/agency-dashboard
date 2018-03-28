import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Sidebar from './components/Sidebar/Sidebar';
import Inbox from './modules/Inbox/Inbox';



class App extends Component {

  render() {
    return (
      <div className="App">

        <Sidebar />
        
        <Route path="/inbox" component={ Inbox } />

      </div>
    );
  }

}

export default App;
