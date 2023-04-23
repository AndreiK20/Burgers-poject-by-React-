export const getTotalPriceSelector = (state) => {
  const constructorItemsArray = state.selectedItems.selectedIngredients;

  const totalPrice = constructorItemsArray.reduce((acc, currentItem) => {
    acc = acc + currentItem.price;
    return acc;
  }, 0);
  return totalPrice;
};
