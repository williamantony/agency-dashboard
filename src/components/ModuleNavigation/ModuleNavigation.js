import React, { Component } from 'react';
import ModuleName from '../ModuleName/ModuleName';
import './ModuleNavigation.css';

class ModuleNavigation extends Component {

  render() {
    return (
      <div className="ModuleNavigation">
        <ModuleName />
        { this.props.children }
      </div>
    );
  }

}

export default ModuleNavigation;
