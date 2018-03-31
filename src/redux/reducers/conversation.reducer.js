import { 
  ADD_MESSAGE,
  CREATE_GROUP,
} from '../actions';

const initialState = {
  groups: [],
  messages: [],
};

export default (state = initialState, action) => {
  switch (action.type) {

    case ADD_MESSAGE:
      const messages = [...state.messages, action.payload.message];
      return Object.assign({}, state, { messages });

    case CREATE_GROUP:
      const groups = [...state.groups, action.payload.group];
      return Object.assign({}, state, { groups });

    default:
      return state;
  }
};
