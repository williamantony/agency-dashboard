import React, { Component } from 'react';
import './ModuleSearch.css';

class ModuleSearch extends Component {

  focusInputOnClick = (event) => {

    if (event.target.dataset.istarget) {
      event.target.getElementsByTagName('input')[0].focus();
    }

  }

  render() {
    return (
      <div className="ModuleSearch">
        <div className="ModuleSearch__Input"
          data-istarget={ true }
          onClick={ this.focusInputOnClick } >
          <input type="text" placeholder="Search" />
          <div className="ModuleSearch__Icon" />
        </div>
      </div>
    );
  }

}

export default ModuleSearch;
