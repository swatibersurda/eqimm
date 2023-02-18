import * as Types from "./actionType";
import axios from "axios";

export const postTwoNumbers = (payload) => (dispatch) => {
  dispatch({ type: Types.POST_ADD_DATA_REQUEST });
  return axios
    .post("http://localhost:5000", payload)
    .then((res) => {
      dispatch({ type: Types.POST_ADD_DATA_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: Types.POST_ADD_DATA_FAILURE });
    });
};
