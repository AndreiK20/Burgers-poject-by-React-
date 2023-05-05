import { useState } from "react";
import styles from "./BurgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { Modal } from "../Modal/Modal";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";
import { useSelector, useDispatch } from "react-redux";
import { getElementsFromAPISelector } from "../../services/action/selectors/getElementsFromAPISelector";
import { getCurrentIngredientsSelector } from "../../services/action/selectors/getCurrentIngredientsSelector";
import { deleteCurrentIngredient } from "../../services/action/currentIngradients";
import { BurgerIngredient } from "../BurgerIngredient/BurgerIngredient";

export function BurgerIngredients() {
  const [current, setCurrent] = useState("one");

  function onClose() {
    dispatch(deleteCurrentIngredient());
  }
  const dispatch = useDispatch();
  const ingredient = useSelector(getCurrentIngredientsSelector);
  

  const { data, dataRequest, dataFailed } = useSelector(
    getElementsFromAPISelector
  );

  return (
    <>
      <section className={styles.Main}>
        <div className={styles.Label}>
          <p className="text text_type_main-large ">Соберите бургер</p>
        </div>
        <div className={styles.Trio}>
          <Tab value="one" active={current === "one"} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value="two" active={current === "two"} onClick={setCurrent}>
            Соусы
          </Tab>
          <Tab value="three" active={current === "three"} onClick={setCurrent}>
            Начинка
          </Tab>
        </div>
        <p className="text text_type_main-medium mb-5">Булки</p>
        <div className={styles.Ingridients}>
          <ul className={styles.Type}>
            {(data?.filter((item) => item.type === "bun") ?? []).map(
              (element) => (
                <BurgerIngredient
                  ingredient={element}
                  key={element._id}
                />
              )
            )}
          </ul>
          <p className="text text_type_main-medium mb-5">Соусы</p>
          <ul className={styles.Type}>
            {data
              ?.filter((item) => item.type === "sauce")
              .map((element) => (
                <BurgerIngredient
                  ingredient={element}
                  key={element._id}
                />
              ))}
          </ul>
          <p className="text text_type_main-medium mb-5">Начинка</p>
          <ul div className={styles.Type}>
            {data
              ?.filter((item) => item.type === "main")
              .map((element) => (
                <BurgerIngredient
                  ingredient={element}
                  key={element._id}
                />
              ))}
          </ul>
        </div>
      </section>
      {ingredient && (
        <Modal header={"Детали ингредиента"} onClose={onClose}>
          <IngredientDetails ingredient={ingredient} />
        </Modal>
      )}
    </>
  );
}
