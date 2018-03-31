export const ADD_MESSAGE = 'ADD_MESSAGE';

export const addMessage = (message) => {

  return {
    type: ADD_MESSAGE,
    payload: {
      message
    },
  };

};

export const ADD_MESSAGE_TO_GROUP = 'ADD_MESSAGE_TO_GROUP';

export const addMessageToGroup = (message, groupID) => {

  return {
    type: ADD_MESSAGE_TO_GROUP,
    payload: {
      message,
      groupID,
    },
  };

};

export const CREATE_GROUP = 'CREATE_GROUP';

export const createGroup = (group) => {

  return {
    type: CREATE_GROUP,
    payload: {
      group,
    },
  };

};
