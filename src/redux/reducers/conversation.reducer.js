import { 
  ADD_MESSAGE,
  ADD_MESSAGE_TO_GROUP,
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

    case ADD_MESSAGE_TO_GROUP:
      const { message, groupID } = action.payload;

      // Refactor-Note: Might be better if using reverse for-loop
      const targetIndex = state.groups.findIndex(group => group.id === groupID);
      
      const targetGroup = Object.assign({}, state.groups[targetIndex]);
      targetGroup.messages.push(message);

      const groupsArray = [
        ...state.groups.slice(0, targetIndex),
        targetGroup,
        ...state.groups.slice(targetIndex + 1)
      ];
      
      return Object.assign({}, state, { groups: groupsArray });

    case CREATE_GROUP:
      const groups = [...state.groups, action.payload.group];
      return Object.assign({}, state, { groups });

    default:
      return state;
  }
};
