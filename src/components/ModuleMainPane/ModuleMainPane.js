import React, { Component } from 'react';
import './ModuleMainPane.css';

class ModuleMainPane extends Component {

  render() {
    return (
      <div className="ModuleMainPane">
        { this.props.children }
      </div>
    );
  }

}

export default ModuleMainPane;
