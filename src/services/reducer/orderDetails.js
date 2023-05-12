import { SET_ORDER, DELETE_ORDER } from "../constans/constants";


const initialState = {
  name: "",
  orderNumber: "",
};


export const orderDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER: {
      return {
        ...state,
        name: action.data.name,
        orderNumber: action.data.orderNumber,
      };
    }

    case DELETE_ORDER: {
      return {
        ...state,
        name: action.data.name,
        orderNumber: action.data.orderNumber,
      };
    }

    default: {
      return state;
    }
  }
};