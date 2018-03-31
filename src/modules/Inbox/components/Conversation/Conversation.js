import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addMessage,
  createGroup,
} from '../../../../redux/actions';

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

  createGroup = (direction = 'incoming') => {

    const { groups } = this.props.conversation;
    const count = groups.length;
    const id = count + 1;
    
    const newGroup = {
      id,
      direction,
      datetime: Date.now(),
      messages: [],
    };

    this.props.createGroup(newGroup);

    return newGroup;

  }

  render() {
    return (
      <div className="Conversation">
        <div className="Conversation__view">
          <div className="Conversation__content">
            {
              this.props.conversation.messages.map((group, index) => {
                return (<ConversationGroup key={ index } group={ this.state.group[index] } />);
              })
            }
          </div>
        </div>
        <div className="Conversation__input">
          <div className="Conversation__inputbox" contentEditable={ true } onKeyPress={ this.handleKeyPress } />
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  addMessage,
  createGroup,
};

export default connect(mapStateToProps, mapDispatchToProps)(Conversation);
