import React, { Component } from 'react';
import './RecordsFilter.css';

class RecordsFilter extends Component {

  focusInputOnClick = (event) => {

    if (event.target.dataset.istarget) {
      event.target.getElementsByTagName('input')[0].focus();
    }

  }

  render() {
    return (
      <div className="RecordsFilter">
        <div className="RecordsFilter__Input"
          data-istarget={ true }
          onClick={ this.focusInputOnClick } >
          <input type="text" placeholder="Search" />
          <div className="RecordsFilter__Icon" />
        </div>
      </div>
    );
  }

}

export default RecordsFilter;
