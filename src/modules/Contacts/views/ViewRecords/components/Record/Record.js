import React, { Component } from 'react';
import RecordEntry from './components/RecordEntry/RecordEntry';

import './Record.css';

class Record extends Component {

  render() {
    return (
      <div className="Record">
        <div className="Record__head">
          <div className="Record__title">{ this.props.record.title }</div>
        </div>
        <div className="Record__content">
        {
          this.props.record.entries.map((entry, index) => {
            return <RecordEntry key={ index } entry={ entry } />;
          })
        }
        </div>
      </div>
    );
  }

}

export default Record;
