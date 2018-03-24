import React, { Component } from 'react';
import './Module.css';

class Module extends Component {

  render() {
    return (
      <div className="Module">
        { this.props.children }
      </div>
    );
  }

}

export default Module;
