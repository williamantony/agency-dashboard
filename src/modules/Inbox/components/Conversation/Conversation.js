import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addMessage,
  addMessageToGroup,
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

  handleKeyPress = e => {
    
    if (e.key === 'Enter') {

      e.preventDefault();

      if (e.target.innerHTML.trim() === '') return;

      const { groups } = this.props.conversation;

      const message = {
        type: 'outgoing',
        datetime: Date.now(),
        message: e.target.textContent,
      };



      let targetGroupID = null;

      if (groups.length > 0) {
        
        const lastGroup = groups[groups.length - 1];
        targetGroupID = lastGroup.id;

      } else {
        
        const newGroup = this.createGroup();
        targetGroupID = newGroup.id;

      }



      this.props.addMessageToGroup(message, targetGroupID);

      e.target.innerHTML = '';

    }

  }

  render() {
    return (
      <div className="Conversation">
        <div className="Conversation__view">
          <div className="Conversation__content">
            {
              this.props.conversation.groups.map((group, index) => {
                return (<ConversationGroup key={ index } group={ group } />);
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
  addMessageToGroup,
  createGroup,
};

export default connect(mapStateToProps, mapDispatchToProps)(Conversation);
