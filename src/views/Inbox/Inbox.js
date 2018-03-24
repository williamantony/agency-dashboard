import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Inbox.css';

class Inbox extends Component {

  render() {
    return (
      <div className="Inbox">

      </div>
    );
  }

}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Inbox);
