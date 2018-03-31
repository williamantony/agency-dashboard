import { ADD_MESSAGE } from '../actions';

const initialState = {
  messages: []
};

export default (state = initialState, action) => {
  switch (action.type) {

    case ADD_MESSAGE:
      const messages = [...state.messages, action.payload.message];
      return Object.assign({}, state, { messages });

    default:
      return state;
  }
};
