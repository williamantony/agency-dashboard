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

  createMessage = (message = '', direction = 'incoming') => {

    const { groups } = this.props.conversation;

    const newMessage = {
      direction,
      datetime: Date.now(),
      message,
    };

    return newMessage;

  }

  handleKeyPress = e => {
    
    if (e.key === 'Enter') {

      e.preventDefault();

      if (e.target.innerHTML.trim() === '') return;

      const { groups } = this.props.conversation;
      const message = this.createMessage(e.target.textContent, 'outgoing');

      let targetGroupID = null;

      const createNewGroup = () => {

        const newGroup = this.createGroup(message.direction);
        targetGroupID = newGroup.id;

      };

      if (groups.length > 0) {

        const lastGroup = groups[groups.length - 1];
        targetGroupID = lastGroup.id;

        const lastGroupDate = new Date(lastGroup.datetime).setSeconds(0, 0);
        const messageDate = new Date(message.datetime).setSeconds(0, 0);
        
        if (lastGroupDate !== messageDate) {

          createNewGroup();

        }

      } else {
        
        createNewGroup();

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
              this.props.conversation.groups.map((group, index, groupArray) => {
                const jsx = [];
                if (index > 0)
                console.log(moment(group.datetime).isSame(groupArray[index - 1].datetime, 'day'));
                jsx.push(<DayDivider key={ 'DayDivider_' + index } />);
                jsx.push(<ConversationGroup key={ index } group={ group } />);

                return jsx;
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
