import { getIngredients } from "../api"; 

import {
  GET_REQUEST,
  GET_REQUEST_FAILED,
  GET_REQUEST_SUCCESS,
} from "../constans/constants";

export function fetchData() {
  return async function (dispatch) {
    dispatch({
      type: GET_REQUEST,
    });
    try {
      const result = await getIngredients();

      setTimeout(() => {
        dispatch({
          type: GET_REQUEST_SUCCESS,
          data: result.data,
        });
      });
    } catch (err) {
      dispatch({
        type: GET_REQUEST_FAILED,
      });
    } finally {
    }
  };
}



