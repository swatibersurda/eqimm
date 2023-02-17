import * as Types from "./actionType";
const intialState = {
  isLoading: false,
  data: [],
  isError: false,
};
export const reducer = (state = intialState, action) => {
  switch (action.type) {
    case Types.POST_ADD_DATA_REQUEST: {
      return {
        ...state,
        isError: false,
      };
    }
    case Types.POST_ADD_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    }
    case Types.POST_ADD_DATA_FAILURE: {
      return {
        ...state,
        isError: false,
      };
    }
    default:
      return state;
  }
};
