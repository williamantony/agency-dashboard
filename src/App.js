import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Sidebar from './components/Sidebar/Sidebar';
import Chat from './views/Chat/Chat';
import Module from './components/Module/Module';
import ModuleSidePane from './components/ModuleSidePane/ModuleSidePane';
import ModuleMainPane from './components/ModuleMainPane/ModuleMainPane';

import ModuleSearch from './components/ModuleSearch/ModuleSearch';

class App extends Component {

  render() {
    return (
      <div className="App">

        <Sidebar />

        <Module>          
          <ModuleSidePane>
            <ModuleSearch />
          </ModuleSidePane>

          <ModuleMainPane />
        </Module>

        <Route path="/" component={ Chat } />

      </div>
    );
  }

}

export default App;
