import { useState, useEffect, useRef } from "react";
import styles from "./BurgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { Modal } from "../Modal/Modal";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";
import { useSelector, useDispatch } from "react-redux";
import { getElementsFromAPISelector } from "../../services/selectors/getElementsFromAPISelector";
import { getCurrentIngredientsSelector } from "../../services/selectors/getCurrentIngredientsSelector";
import { deleteCurrentIngredient } from "../../services/action/currentIngradients";
import { BurgerIngredient } from "../BurgerIngredient/BurgerIngredient";
import { useInView } from "react-intersection-observer";
import { getElementsFromAPIUpdatedCountsSelector } from "../../services/selectors/getElementsFromAPIUpdatedCountsSelector"; 



export function BurgerIngredients() {

  const updatedBurgerIngredients = useSelector(
    getElementsFromAPIUpdatedCountsSelector
  );

  function onClose() {
    dispatch(deleteCurrentIngredient());
  }
  const dispatch = useDispatch();
  const ingredient = useSelector(getCurrentIngredientsSelector);

  // const { data, dataRequest, dataFailed } = useSelector(
  //   getElementsFromAPISelector
  // );
  
  const data = updatedBurgerIngredients

  const [current, setCurrent] = useState("one");
  const One = useRef();
  const Two = useRef();
  const Three = useRef();

  const [refOne, inViewOne] = useInView({ threshold: 0.2 });
  const [refTwo, inViewTwo] = useInView({ threshold: 0.5 });
  const [refThree, inViewThree] = useInView({ threshold: 0.3 });

  useEffect(() => {
    inViewOne
      ? setCurrent("one")
      : inViewTwo
      ? setCurrent("two")
      : inViewThree
      ? setCurrent("three")
      : setCurrent("one");
  }, [inViewOne, inViewTwo, inViewThree]);

  function handleClick(section, activeState) {
    setCurrent(activeState);
    section.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }


  return (
    <>
      <section className={styles.Main}>
        <div className={styles.Label}>
          <p className="text text_type_main-large ">Соберите бургер</p>
        </div>
        <div className={styles.Trio}>
          <Tab
            value="one"
            active={current === "one"}
            onClick={() => {
              handleClick(One, "one");
            }}
          >
            Булки
          </Tab>
          <Tab
            value="two"
            active={current === "two"}
            onClick={() => {
              handleClick(Two, "two");
            }}
          >
            Соусы
          </Tab>
          <Tab
            value="three"
            active={current === "three"}
            onClick={() => {
              handleClick(Three, "three");
            }}
          >
            Начинка
          </Tab>
        </div>
        <div className={styles.Ingridients}>
          <p className="text text_type_main-medium mb-5" ref={One}>
          Булки
          </p>
          <ul ref={refOne} className={styles.Individual}>
            {(data?.filter((item) => item.type === "bun") ?? []).map(
              (element) => (
                <li  key={element._id}>
                  <BurgerIngredient ingredient={element}  id={element._id} />
                </li>
              )
            )}
          </ul>
          <p className="text text_type_main-medium mb-5" ref={Two}>
            Соусы
          </p>
          <ul ref={refTwo} className={styles.Individual}>
            {data
              ?.filter((item) => item.type === "sauce")
              .map((element) => (
                  <li  key={element._id}>
                    <BurgerIngredient ingredient={element}  key={element._id} /> 
                  </li>
              ))}
          </ul>
          <p className="text text_type_main-medium mb-5" ref={Three}>
            Начинка
          </p>
          <ul ref={refThree}  className={styles.Individual}>
            {data
              ?.filter((item) => item.type === "main")
              .map((element) => (
                <li  key={element._id}>
                  <BurgerIngredient ingredient={element} id={element._id}/>
                </li>
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
