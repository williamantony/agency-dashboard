import React, { Component } from 'react';
import RecordsFilter from './components/RecordsFilter/RecordsFilter';
import RecordsView from './components/RecordsView/RecordsView';
import ScrollBar from '../../../../components/ScrollBar/ScrollBar';

import './ViewRecords.css';

class ViewRecords extends Component {

  render() {
    return (
      <div className="ViewRecords">
        <div className="ModuleMainPane__header">
          <RecordsFilter />
        </div>
        <div className="ModuleMainPane__content">
          <RecordsView />
          <ScrollBar />
        </div>
      </div>
    );
  }

}

export default ViewRecords;
