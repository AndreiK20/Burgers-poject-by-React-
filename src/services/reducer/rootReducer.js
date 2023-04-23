import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { currentIngredientReducer } from "./currentIngredient";
import { selectedIngredientsReducer } from "./selectedIngredients";
import { orderDetailsReducer } from "./orderDetails";

const rootReducer = combineReducers({
  ingredientsFromAPI: ingredientsReducer,
  currentIngredients: currentIngredientReducer,
  selectedItems: selectedIngredientsReducer,
  order: orderDetailsReducer,
});

export default rootReducer;
