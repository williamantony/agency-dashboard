import React, { Component } from 'react';
import ModuleSearch from '../ModuleSearch/ModuleSearch';
import './ModuleListItems.css';

class ModuleListItems extends Component {

  render() {
    return (
      <div className="ModuleListItems">
        <ModuleSearch />
      </div>
    );
  }

}

export default ModuleListItems;
