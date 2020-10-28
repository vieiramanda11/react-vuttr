import { ADD_TOOL, REMOVE_TOOL } from "./toolTypes";

const initialState = [];

const toolReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOOL:
      return {
        // something here
      };
    case REMOVE_TOOL:
      return {
        // something here
      };
    default:
      return state;
  }
};

export default toolReducer;
