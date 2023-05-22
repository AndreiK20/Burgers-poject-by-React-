export const getTotalPriceSelector = (state) => {
  const constructorItemsArray = state.selectedItems.selectedIngredients;

  const totalPrice = constructorItemsArray.reduce((acc, currentItem) => {
    acc = acc + currentItem.price;
    return acc;
  }, 0);
  return totalPrice;
};

const getFinalPrice = (ingredients, bun) => {
  const data = bun
    ? bun.price * 2 +
      ingredients.reduce((acc, item) => acc + item.price, 0)
    : ingredients.reduce((acc, item) => acc + item.price, 0);
  return data;
};

const finalPrice = useMemo(() => {
  return getFinalPrice(ingredients, bun);
}, [ingredients, bun]);
