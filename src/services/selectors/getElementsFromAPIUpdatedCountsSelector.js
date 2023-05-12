export const getElementsFromAPIUpdatedCountsSelector = (state) => {
  const constructorItemsArray = state.selectedItems.selectedIngredients;
  const burgerIngredients = state.ingredientsFromAPI.data; // array from API

  const updatedBurgerIngredients = burgerIngredients.reduce(
    (accumulator, itemA) => {
      const count = constructorItemsArray.filter(
        (itemB) => itemB._id === itemA._id
      ).length;

      accumulator.push({ ...itemA, count });
      return accumulator;
    },
    []
  );

  return updatedBurgerIngredients;
};
