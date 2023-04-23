import { useState } from "react";
import styles from "./BurgerIngredients.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "react-redux";
import { getElementsFromAPISelector } from "../../services/action/selectors/getElementsFromAPISelector";

import { useDrag } from "react-dnd";

export function BurgerIngredients({ handleOpenIngredients }) {
  const [current, setCurrent] = useState("one");

  const { data, dataRequest, dataFailed } = useSelector(
    getElementsFromAPISelector
  );

  /*   arrayOdelementsFromAPI.map((element)=>{

    // отрисовать этот элемент в burgerConstructor
    // на каждый элемент навесить хук useDrag и передать туда element

  // вынести все что отрисовывается(элемент) в отдельный компонент 

  }) */

  //drag
  const [{ isDrag }, dragRef] = useDrag({
    type: "ingredients",
    item: { ...ingredient },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });
  //drag

  return (
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
              <BurgerIngredient ingredient={element} key={element._id} />
            )
          )}
        </ul>
        <p className="text text_type_main-medium mb-5">Соусы</p>
        <ul className={styles.Type}>
          {data
            ?.filter((item) => item.type === "sauce")
            .map((element) => (
              <BurgerIngredient ingredient={element} key={element._id} />
            ))}
        </ul>
        <p className="text text_type_main-medium mb-5">Начинка</p>
        <ul div className={styles.Type}>
          {data
            ?.filter((item) => item.type === "main")
            .map((element) => (
              <BurgerIngredient ingredient={element} key={element._id} />
            ))}
        </ul>
      </div>
    </section>
  );
}


/* 
return (
  <>
    <div
      className={`${styles.scrollContainer} custom-scroll`}
      onScroll={handleOnscroll}
      ref={scrollContainerRef}
    >
      <p className="text text_type_main-medium">Булки</p>
      <ul className={styles.container}>
        {elements.map((element) => {
          if (element.type === "bun") {
            return (
              <BurgerIngredient ingredient={element} key={element._id} />
            );
          }
        })}
        <div ref={one}></div>
      </ul>
      <p className="text text_type_main-medium">Соусы</p>
      <ul className={styles.container}>
        {elements.map((element) => {
          if (element.type === "sauce") {
            return (
              <BurgerIngredient ingredient={element} key={element._id} />
            );
          }
        })}
        <div ref={two}></div>
      </ul>
      <p className="text text_type_main-medium" ref={three}>
        Начинки
      </p>
      <ul className={styles.container}>
        {elements.map((element) => {
          if (element.type === "main") {
            return (
              <BurgerIngredient ingredient={element} key={element._id} />
            );
          }
        })}
      </ul>
      <div ref={three}></div>
    </div>
  </>
);
}
 */
