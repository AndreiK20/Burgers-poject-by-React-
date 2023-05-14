import { useState, useMemo, useCallback } from "react";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerConstructor.module.css";
import { Modal } from "../Modal/Modal";
import { OrderDetails } from "../OrderDetails/OrderDetails";
import { BurgerIngredientsInOderList } from "../BurgerIngredientsInOderLIst/BurgerIngredientsInOderList";
import { useDrop } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";
import { getSelectedElementsSelector } from "../../services/selectors/getSelectedElementsSelector";
import { deleteCurrentOder } from "../../services/action/orderDetails";
import { setIngredientToBurger } from "../../services/action/selectedIngredients";
import { updateSelectedElements } from "../../services/action/selectedIngredients";
import { getIngredientsForPostAPISelector } from "../../services/selectors/getIngredientsForPostAPISelector";
import { getOrderNumberSelector } from "../../services/selectors/getOrderNumberSelector";
import { postOrder } from "../../services/action/orderDetails";

export function BurgerConstructor() {
  const selectedElements = useSelector(getSelectedElementsSelector);
  const dispatch = useDispatch();

  const ingredientsForPostAPI = useSelector(getIngredientsForPostAPISelector);
  const ifSelectedElemetnsLength = ingredientsForPostAPI.ingredients.length;

  function handleButtonClick() {
    if (ifSelectedElemetnsLength > 0) {
      dispatch(postOrder(ingredientsForPostAPI));
    }
  }
 

  const orderNumber = useSelector(getOrderNumberSelector);

  function onClose() {
    dispatch(deleteCurrentOder());
  }

  // передаю элементы из нового хранилища в elements
  const buns = selectedElements.filter((element) => {
    return element.type === "bun";
  });

  // всегда одна булка
  const elements = selectedElements.filter((element) => {
    return element.type !== "bun";
  });
  const bun = buns[0];


  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragItem = elements[dragIndex];
      const hoverItem = elements[hoverIndex];
      const updatedElements = [...elements];
      updatedElements[hoverIndex] = dragItem;
      updatedElements[dragIndex] = hoverItem;
      dispatch(updateSelectedElements(updatedElements));
    },
    [selectedElements, dispatch]
  );

  // drug drop section
  const [{ isHover }, drop] = useDrop({
    accept: "ingredients",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(item) {
      dispatch(setIngredientToBurger(item));
    },
  });

  const getFinalPrice = (elements, bun) => {
    const data = bun
      ? bun.price * 2 + elements.reduce((acc, item) => acc + item.price, 0)
      : elements.reduce((acc, item) => acc + item.price, 0);
    return data;
  };

  const finalPrice = useMemo(() => {
    return getFinalPrice(elements, bun);
  }, [elements, bun]);
  const borderColor = isHover ? "lightgreen" : "transparent";

  return (
    <>
      <section className={styles.Section} ref={drop}>
        <div
          className={styles.Column}
          style={{ border: `1px solid ${borderColor}` }}
        >
          {bun && (
            <div className={styles.ElementUp}>
              <ConstructorElement
                isLocked={true}
                text={bun.name + " (верх)"}
                price={bun.price}
                thumbnail={bun.image}
                type="top"
              />
            </div>
          )}

          <div className={styles.Lists}>
            {elements.map((element, index) => (
              <div className={styles.Element} key={element.dropUniqID}>
                <BurgerIngredientsInOderList
                  element={element}
                  index={index}
                  moveCard={moveCard}
                />
              </div>
            ))}
          </div>
          {bun && (
            <div className={styles.ElementBottom}>
              <ConstructorElement
                isLocked={true}
                text={bun.name + " (низ)"}
                price={bun.price}
                thumbnail={bun.image}
                type="bottom"
              />
            </div>
          )}
          <div className={`${styles.Price} ${" mt-10 mr-4"}`}>
            <span>
              {" "}
              <span className=" text text_type_digits-medium mr-2">
                {finalPrice}
              </span>
              <CurrencyIcon type="primary" />
            </span>

            <div className=" ml-10">
              <div className={styles.but}>
                {" "}
                <Button
                  onClick={handleButtonClick}
                  disabled={ifSelectedElemetnsLength === 0}
                  htmlType="button"
                  type="primary"
                  size="large"
                >
                  Оформить заказ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {orderNumber && (
        <Modal header={""} onClose={onClose}>
          <OrderDetails />
        </Modal>
      )}
    </>
  );
}

