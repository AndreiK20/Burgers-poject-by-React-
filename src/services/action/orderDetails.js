import { SET_ORDER, DELETE_ORDER } from "../constans/constants";
import { postNewOrder } from "../../services/api";

// action creators
const setCurrentOder = (response) => {
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


export function postOrder(ingredientsForPostAPI) {
  return async (dispatch) => {
      try{
        const response = await postNewOrder(ingredientsForPostAPI);
      if (response.success) {
        dispatch(setCurrentOder(response));
      }
      } catch (err) {
        console.log(err)
      } finally {
      }
  };
}