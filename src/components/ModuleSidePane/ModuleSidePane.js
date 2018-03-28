import React, { Component } from 'react';
import './ModuleSidePane.css';

class ModuleSidePane extends Component {

  render() {
    return (
      <div className="ModuleSidePane">
      { this.props.children }
      </div>
    );
  }

}

export default ModuleSidePane;
