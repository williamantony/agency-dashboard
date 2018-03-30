import React, { Component } from 'react';
import './Conversation.css';

class Conversation extends Component {

  render() {
    return (          
      <div className="Conversation">
        <div className="Conversation__content">

        </div>
        <div className="Conversation__input">
          <div className="Conversation__inputbox" contentEditable={ true }></div>
        </div>
      </div>
    );
  }

}

export default Conversation;
