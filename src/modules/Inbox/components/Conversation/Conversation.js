import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Conversation.css';
import ConversationGroup from './components/ConversationGroup/ConversationGroup';

class Conversation extends Component {

  state = {
    group: [
      {
        type: 'sent',
        datetime: '2:30 pm',
        messages: [
          'How are you ?',
        ],
      },
      {
        type: 'received',
        datetime: '2:30 pm',
        messages: [
          'I\'m fine, thanks.',
          'Hah,.',
        ],
      },
      {
        type: 'sent',
        datetime: '2:30 pm',
        messages: [
          'Glad to hear that',
          'Do you have any plans for the evening?',
        ],
      }
    ]
  }

  render() {
    return (
      <div className="Conversation">
        <div className="Conversation__view">
          <div className="Conversation__content">
            {
              this.state.group.map((group, index) => {
                return (<ConversationGroup key={ index } group={ group } />);
              })
            }
          </div>
        </div>
        <div className="Conversation__input">
          <div className="Conversation__inputbox" contentEditable={ true }></div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = { };

export default connect(mapStateToProps, mapDispatchToProps)(Conversation);
