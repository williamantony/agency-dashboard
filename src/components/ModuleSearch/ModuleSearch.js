import React, { Component } from 'react';
import './ModuleSearch.css';

class ModuleSearch extends Component {

  render() {
    return (
      <div className="ModuleSearch">
        <div className="ModuleSearch__Input">
          <input type="text" placeholder="Search" />
          <div className="ModuleSearch__Icon" />
        </div>
      </div>
    );
  }

}

export default ModuleSearch;
