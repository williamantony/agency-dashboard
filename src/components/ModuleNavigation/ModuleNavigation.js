import React, { Component } from 'react';
import './ModuleNavigation.css';

class ModuleNavigation extends Component {

  render() {
    return (
      <div className="ModuleNavigation">
        { this.props.children }
      </div>
    );
  }

}

export default ModuleNavigation;
