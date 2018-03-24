import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Chat.css';

class Chat extends Component {

  render() {
    return (
      <div className="Chat">

      </div>
    );
  }

}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
