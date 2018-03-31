import React, { Component } from 'react';
import './ConversationGroup.css';

class ConversationGroup extends Component {

  render() {
    const { group } = this.props;
    return (
      <div className="ConversationGroup" data-type={ group.type }>
        <div className="datetime">{ group.datetime }</div>
        <div className="messages">
          {
            group.messages.map(message => {
              return (<div className="messages__item">{ message }</div>);
            })
          }
        </div>
      </div>
    );
  }

}

export default ConversationGroup;
