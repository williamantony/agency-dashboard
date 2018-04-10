import React, { Component } from 'react';

import Module from '../../components/Module/Module';
import ModuleSidePane from '../../components/ModuleSidePane/ModuleSidePane';
import ModuleMainPane from '../../components/ModuleMainPane/ModuleMainPane';
import ModuleSearch from '../../components/ModuleSearch/ModuleSearch';

class Inbox extends Component {

  render() {
    return (
      <Module>
        <ModuleSidePane>
          <ModuleSearch />
          
        </ModuleSidePane>

        <ModuleMainPane>
          
        </ModuleMainPane>
      </Module>
    );
  }

}

export default Inbox;
