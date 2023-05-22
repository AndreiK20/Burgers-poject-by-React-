// для модального окна хз это работает или нет

import {
  CURRENT_INGREDIENT_SET,
  CURRENT_INGREDIENT_DELETE,
} from "../constans/constants";

const initialState = {
  currentIngredients: null,
};

export const currentIngredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_INGREDIENT_SET: {
      return {
        ...state,
        currentIngredients: action.data,
      };
    }
    case CURRENT_INGREDIENT_DELETE: {
      return {
        ...state,
        currentIngredients: null,
      };
    }
    default: {
      return state;
    }
  }
};
