import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Sidebar from './components/Sidebar/Sidebar';
import Chat from './views/Chat/Chat';
import Module from './components/Module/Module';
import ModuleListItems from './components/ModuleListItems/ModuleListItems';
import ModuleItemContent from './components/ModuleItemContent/ModuleItemContent';

class App extends Component {

  render() {
    return (
      <div className="App">

        <Sidebar />

        <Module>
          <ModuleListItems />
          <ModuleItemContent />
        </Module>

        <Route path="/" component={ Chat } />

      </div>
    );
  }

}

export default App;
