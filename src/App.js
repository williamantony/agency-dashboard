import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Drawer from './components/Drawer/Drawer';
import Chat from './views/Chat/Chat';
import Module from './components/Module/Module';
import ModuleNavigation from './components/ModuleNavigation/ModuleNavigation';
import ModuleListItems from './components/ModuleListItems/ModuleListItems';
import ModuleItemContent from './components/ModuleItemContent/ModuleItemContent';

class App extends Component {

  render() {
    return (
      <div className="App">

        <Drawer />

        <Module>
          <ModuleNavigation />
          <ModuleListItems />
          <ModuleItemContent />
        </Module>

        <Route path="/" component={ Chat } />

      </div>
    );
  }

}

export default App;
