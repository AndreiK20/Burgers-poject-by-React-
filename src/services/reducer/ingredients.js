// это первоначальный  массив загружаемый по API
import {
    GET_REQUEST,
    GET_REQUEST_FAILED,
    GET_REQUEST_SUCCESS,
    UPDATE_COUNT,
  } from "../../services/constans/constants"

  const initialState = {
    dataRequest: false,
    dataFailed: false,
    data: [],
  };
  
  export const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_REQUEST: {
        return {
          ...state,
          dataRequest: true,
          dataFailed: false,
        };
      }
      case GET_REQUEST_SUCCESS: {
        return {
          ...state,
          data: action.data.map((item) => ({
            ...item,
            board: "default",
            count: 0, 
          })),
  
          dataRequest: false,
        };
      }
      case GET_REQUEST_FAILED: {
        return {
          ...state,
          dataFailed: true,
          dataRequest: false,
        };
      }
  
      case UPDATE_COUNT: { // нужно проверить
        const updatedData = state.data.map((item) => {
          const countUpdate = action.data[item._id];
  
          if (countUpdate) {
            return { ...item, count: countUpdate.count };
          } else {
            return item;
          }
        });
  
        return {
          ...state,
          data: updatedData,
        };
      }
  
      default: {
        return state;
      }
    }
  };
  