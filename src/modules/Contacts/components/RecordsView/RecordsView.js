import React, { Component } from 'react';
import Record from '../Record/Record';

import './RecordsView.css';

class RecordsView extends Component {

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
      <div className="RecordsView">
      {
        this.state.records.map((record, index) => {
          return <Record key={ index } record={ record } />;
        })
      }
      </div>
    );
  }

}

export default RecordsView;
