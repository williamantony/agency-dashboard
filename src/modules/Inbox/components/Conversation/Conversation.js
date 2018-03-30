import React, { Component } from 'react';
import './Conversation.css';

class Conversation extends Component {

  render() {
    return (          
      <div className="Conversation">
        <div className="Conversation__content">

          <div className="Conversation__item" data-type="sent">
            <div className="datetime">2:30 pm</div>
            <div className="messages">
              <div className="messages__item">How are you ?</div>
            </div>
          </div>
          <div className="Conversation__item">
            <div className="sender" />
            <div className="datetime">2:30 pm</div>
            <div className="messages">
              <div className="messages__item">I'm fine, thanks.</div>
              <div className="messages__item">Hah,.</div>
            </div>
          </div>
          <div className="Conversation__item" data-type="sent">
            <div className="datetime">2:30 pm</div>
            <div className="messages">
              <div className="messages__item">Glad to hear that</div>
              <div className="messages__item">Do you have any plans for the evening?</div>
            </div>
          </div>

        </div>
        <div className="Conversation__input">
          <div className="Conversation__inputbox" contentEditable={ true }></div>
        </div>
      </div>
    );
  }

}

export default Conversation;
