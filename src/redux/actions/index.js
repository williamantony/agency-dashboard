export const ADD_MESSAGE = 'ADD_MESSAGE';

export const addMessage = (message) => {

  return {
    type: ADD_MESSAGE,
    payload: {
      message
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
