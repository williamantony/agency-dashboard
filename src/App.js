import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Chat from './views/Chat/Chat';

class App extends Component {

  render() {
    return (
      <div className="App">

        <Route path="/" component={ Chat } />

      </div>
    );
  }

}

export default App;
