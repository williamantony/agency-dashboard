import React, { Component } from 'react';

import Module from '../../components/Module/Module';
import ModuleSidePane from '../../components/ModuleSidePane/ModuleSidePane';
import ModuleMainPane from '../../components/ModuleMainPane/ModuleMainPane';
import ModuleSearch from '../../components/ModuleSearch/ModuleSearch';

import RecordsFilter from './components/RecordsFilter/RecordsFilter';
import RecordsView from './components/RecordsView/RecordsView';
import ScrollBar from '../../components/ScrollBar/ScrollBar';

class Inbox extends Component {

  render() {
    return (
      <Module>
        <ModuleSidePane>
          <ModuleSearch />
          
        </ModuleSidePane>

        <ModuleMainPane>
          <div className="ModuleMainPane__header">
            <RecordsFilter />
          </div>
          <div className="ModuleMainPane__content">
            <RecordsView />
            <ScrollBar />
          </div>
        </ModuleMainPane>
      </Module>
    );
  }

}

export default Inbox;
