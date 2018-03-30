import React, { Component } from 'react';

import Module from '../../components/Module/Module';
import ModuleSidePane from '../../components/ModuleSidePane/ModuleSidePane';
import ModuleMainPane from '../../components/ModuleMainPane/ModuleMainPane';
import ModuleSearch from '../../components/ModuleSearch/ModuleSearch';
import Conversation from './components/Conversation/Conversation';
import Messages from './components/Messages/Messages';

class Inbox extends Component {

  render() {
    return (
      <Module>
        <ModuleSidePane>
          <ModuleSearch />
          <Messages />
        </ModuleSidePane>

        <ModuleMainPane>
          <Conversation />
        </ModuleMainPane>
      </Module>
    );
  }

}

export default Inbox;
