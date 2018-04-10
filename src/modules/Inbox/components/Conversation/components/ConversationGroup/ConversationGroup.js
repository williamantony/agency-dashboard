import React, { Component } from 'react';
import moment from 'moment';
import './ConversationGroup.css';

class ConversationGroup extends Component {

  render() {
    const { group } = this.props;    
    return (
      <div className="ConversationGroup" data-type={ group.direction }>
        <div className="datetime">
          {
            moment(group.datetime).format('LT')
          }
        </div>
        <div className="messages">
          {
            group.messages.map((message, index) => {
              return (<div key={ index } className="messages__item" dangerouslySetInnerHTML={{ __html: message.message }} />);
            })
          }
        </div>
      </div>
    );
  }

}

export default ConversationGroup;
