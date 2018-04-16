import React, { Component } from 'react';
import './RecordEntry.css';

class RecordEntry extends Component {

  render() {
    return (
      <div className="RecordEntry">
        <div className="RecordEntry__content">
          <div className="RecordEntry__name">{ this.props.entry.name }</div>
          <div className="RecordEntry__value">{ this.props.entry.value }</div>
        </div>
      </div>
    );
  }

}

export default RecordEntry;
