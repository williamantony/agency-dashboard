import React, { Component } from 'react';
import ModuleSearch from '../ModuleSearch/ModuleSearch';
import './ModuleSidePane.css';

class ModuleSidePane extends Component {

  render() {
    return (
      <div className="ModuleSidePane">
        <ModuleSearch />
      </div>
    );
  }

}

export default ModuleSidePane;
