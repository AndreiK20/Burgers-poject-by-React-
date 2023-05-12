export const getSelectedElementsSelector = (state) => {
  const selectedElements = state.selectedItems.selectedIngredients;
  return selectedElements;
};
