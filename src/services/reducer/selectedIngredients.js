import {
    INGREDIENT_TO_BURGER_SET,
    INGREDIENT_TO_BURGER_DELETE,
    INGREDIENT_TO_BURGER_UPDATE,
  } from "../constans/constants";
  
  
  const initialState = {
    selectedIngredients: [],
  };
  
  export const selectedIngredientsReducer = (state = initialState, action) => {
    switch (action.type) {
      case INGREDIENT_TO_BURGER_SET: {
        const hasBuns = state.selectedIngredients.some(
          (ingredient) => ingredient.type === "bun"
        );
        const hasBunFromAction = action.data.type === "bun";
  
        if (hasBuns && hasBunFromAction) {
          const newSelectedIngredients = state.selectedIngredients.filter(
            (ingredient) => ingredient.type !== "bun"
          );
  
          return {
            ...state,
            selectedIngredients: [...newSelectedIngredients, action.data],
          };
        }
  
        return {
          ...state,
          selectedIngredients: [...state.selectedIngredients, action.data],
        };
      }
  
      case INGREDIENT_TO_BURGER_DELETE: {
        return {
          ...state,
          selectedIngredients: state.selectedIngredients.filter(
            (ingredient) => ingredient.dropUniqID !== action.data.dropUniqID
          ),
        };
      }
  

      case INGREDIENT_TO_BURGER_UPDATE: {
        const currentBuns = state.selectedIngredients.filter(
          (ingredient) => ingredient.type === "bun"
        );
  
        const updatedIngredients = action.data;
  
        return {
          ...state,
          selectedIngredients: [...currentBuns, ...updatedIngredients],
        };
      }
  
      default: {
        return state;
      }
    }
  };

  