export const getIngredientsForPostAPISelector = (state) => {
  const onlyIDs = state.selectedItems.selectedIngredients;
  const ingredients = onlyIDs.reduce((accumulator, currentValue) => {
    accumulator.push(currentValue._id);
    return accumulator;
  }, []);

  const result = {
    ingredients: ingredients,
  };

  return result;
};
