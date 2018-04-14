import React, { Component } from 'react';
import Record from '../Record/Record';

import './InformationRecords.css';

class InformationRecords extends Component {

  state = {
    // Test Data
    records: [
      {
        title: 'bio',
        entries: [
          {
            name: 'Full Name',
            value: 'Jonathan Doe'
          }
        ]
      }
    ]
  }

  render() {
    return (
      <div className="InformationRecords">
      {
        this.state.records.map((record, index) => {
          return <Record key={ index } record={ record } />;
        })
      }
      </div>
    );
  }

}

export default InformationRecords;
