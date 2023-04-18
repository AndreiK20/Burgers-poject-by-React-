import { useState } from "react";
import styles from "./BurgerIngredients.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

export const BurgerIngredients = ({ handleOpen, data}) => {
  const [current, setCurrent] = useState("one");

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
              <li
                className={styles.Card}
                key={element._id}
                onClick={() => handleOpen(element)}
              >
                <img src={element.image} className={styles.Image} alt="ингредиент"></img>
                <div className={styles.Price}>
                  {element.price}
                  <CurrencyIcon />
                </div>
                <h3 className="text text_type_main-small">{element.name}</h3>
              </li>
            )
          )}
        </ul>
        <p className="text text_type_main-medium mb-5">Соусы</p>
        <ul className={styles.Type}>
          {data
            ?.filter((item) => item.type === "sauce")
            .map((element) => (
                <li className={styles.Card} key={element.id } onClick={() => handleOpen(element)}>
                  <img src={element.image} className={styles.Image} alt="ингредиент"></img>
                  <div className={styles.Price}>
                    {element.price}
                    <CurrencyIcon />
                   </div>
                   <h3 className="text text_type_main-small">{element.name}</h3>
                </li>
            ))}
        </ul>
        <p className="text text_type_main-medium mb-5">Начинка</p>
        <ul div className={styles.Type}>
          {data
            ?.filter((item) => item.type === "main")
            .map((element) => (
                <li className={styles.Card} key={element.id } onClick={() => handleOpen(element)} >
                  <img src={element.image} className={styles.Image} alt="ингредиент"></img>
                  <div className={styles.Price}>
                    {element.price}
                    <CurrencyIcon />
                   </div>
                   <h3 className="text text_type_main-small">{element.name}</h3>
                </li>
                
            ))
            
            
            }
        </ul>
      </div>
    </section>
  );
};
