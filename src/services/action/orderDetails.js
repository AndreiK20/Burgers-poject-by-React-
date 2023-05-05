import { SET_ORDER, DELETE_ORDER } from "../constans/constants";

// action creators
export const setCurrentOder = (response) => {
  const dataForInitialState = {
    name: response.name,
    orderNumber: response.order.number,
  };

  return {
    type: SET_ORDER,
    data: dataForInitialState,
  };
};

export const deleteCurrentOder = () => {
  const dataForInitialState = {
    name: "",
    orderNumber: "",
  };

  return {
    type: DELETE_ORDER,
    data: dataForInitialState,
  };
};