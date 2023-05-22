import {
    CURRENT_INGREDIENT_SET,
    CURRENT_INGREDIENT_DELETE,
  } from "../constans/constants";
  
  // action creators
  export const setCurrentIngredient = (data) => {
    return {
      type: CURRENT_INGREDIENT_SET,
      data,
    };
  };
  
  export const deleteCurrentIngredient = () => {
    return {
      type: CURRENT_INGREDIENT_DELETE,
    };
  };