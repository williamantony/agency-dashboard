import React, { Component } from 'react';
import moment from 'moment';
import './DayDivider.css';

class DayDivider extends Component {

  render() {
    return (
      <div className="DayDivider">
        <div className="date">
          { moment().format('LL') }
        </div>
      </div>
    );
  }

}

export default DayDivider;
