import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Module from '../../components/Module/Module';
import ModuleSidePane from '../../components/ModuleSidePane/ModuleSidePane';
import ModuleMainPane from '../../components/ModuleMainPane/ModuleMainPane';
import ModuleSearch from '../../components/ModuleSearch/ModuleSearch';

import ViewRecords from './views/ViewRecords/ViewRecords';

class Inbox extends Component {

  render() {
    return (
      <Module>
        <ModuleSidePane>
          <ModuleSearch />
          
        </ModuleSidePane>

        <ModuleMainPane>
          <Route path="/contacts/:id/view" component={ ViewRecords } />
        </ModuleMainPane>
      </Module>
    );
  }

}

export default Inbox;
