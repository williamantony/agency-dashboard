import React, { Component } from 'react';
import moment from 'moment';
import './DayDivider.css';

class DayDivider extends Component {

  render() {
    return (
      <div className="DayDivider">
        {
          moment().format('LL')
        }
      </div>
    );
  }

}

export default DayDivider;
