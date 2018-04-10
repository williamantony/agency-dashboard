import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addMessage,
  addMessageToGroup,
  createGroup,
} from '../../../../redux/actions';
import moment from 'moment';

import './Conversation.css';
import ConversationGroup from './components/ConversationGroup/ConversationGroup';
import DayDivider from './components/DayDivider/DayDivider';

class Conversation extends Component {

  createGroup = (direction = 'incoming') => {

    const { groups } = this.props.conversation;

    const newGroup = {
      id: `Group_${ groups.length + 1 }`,
      direction,
      datetime: Date.now(),
      messages: [],
    };

    return newGroup;

  }

  createMessage = (message = '', direction = 'incoming') => {

    const { groups } = this.props.conversation;

    const newMessage = {
      direction,
      datetime: Date.now(),
      message,
    };

    return newMessage;

  }

  pushMessage = (messageData = '', direction = 'incoming') => {

    const { groups } = this.props.conversation;
    let currentGroup = groups[groups.length - 1];

    const message = this.createMessage(messageData, direction);

    const isNewGroupNeeded = () => {
      if (groups.length === 0) return true;
      else {
        if (!moment(currentGroup.datetime).isSame(message.datetime, 'minute')) return true;
        if (currentGroup.direction !== message.direction) return true;
      }
      return false;
    };

    if (isNewGroupNeeded()) {
      const newGroup = this.createGroup(message.direction);
      this.props.createGroup(newGroup);
      currentGroup = newGroup;
    }

    this.props.addMessageToGroup(message, currentGroup.id);
    
  }

  receiveMessage = (messageData = '') => {

    this.pushMessage(messageData, 'incoming');

  }

  sendMessage = (messageData = '') => {

    this.pushMessage(messageData, 'outgoing');

  }

  handleKeyPress = e => {
    
    if (e.key === 'Enter' && !e.shiftKey) {

      e.preventDefault();

      if (e.target.innerHTML.trim() !== '') {
        this.sendMessage(e.target.innerHTML);
      }

      e.target.innerHTML = '';

    }

  }

  onPaste = e => {

    e.preventDefault();

    const copiedText = e.clipboardData.getData('text/plain');

    document.execCommand('insertHTML', false, copiedText);

  }

  receiveDummyMessage = () => {

    this.receiveMessage('Something Wonderfull');

  }

  render() {
    return (
      <div className="Conversation">
        <div className="Conversation__view">
          <div className="Conversation__content" onClick={ this.receiveDummyMessage }>
            {
              this.props.conversation.groups.map((group, index, groupArray) => {
                const jsx = [];

                let showDayDivider = true;

                if (index > 0) {
                  const sameDay = moment(group.datetime).isSame(groupArray[index - 1].datetime, 'day');
                  showDayDivider = !sameDay;
                }

                if (showDayDivider) {
                  jsx.push(<DayDivider key={ 'DayDivider_' + index } />);
                }

                jsx.push(<ConversationGroup key={ index } group={ group } />);

                return jsx;
              })
            }
          </div>
        </div>
        <div className="Conversation__input">
          <div className="Conversation__inputbox" 
            contentEditable={ true } 
            onKeyPress={ this.handleKeyPress } 
            onPaste={ this.onPaste } 
            />
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
