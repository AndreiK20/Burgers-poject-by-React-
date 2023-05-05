import styles from "./BurgerIngredient.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { setCurrentIngredient } from "../../services/action/currentIngradients";
import { useSelector, useDispatch } from "react-redux";
import { deleteCurrentIngredient } from "../../services/action/currentIngradients";
import { useDrag } from "react-dnd";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";



export function BurgerIngredient({ingredient}) {

  const dispatch = useDispatch();

  const [{ isDrag }, dragRef] = useDrag({
    type: "ingredients",
    item: { ...ingredient },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  function handleOnclick() {
    dispatch(setCurrentIngredient(ingredient));
  }

  function onClose() {
    dispatch(deleteCurrentIngredient());
  }

  const countView = (
    <div className={styles.counterWrapper}>
      <span className={`${styles.counter} text text_type_main-default`}>
        {ingredient.count}
      </span>
    </div>
  );
  
  const view = (
    <>
      <li
        className={styles.Card}
        key={ingredient.id}
        onClick={handleOnclick}
        ref={dragRef}
      >
        {ingredient.count > 0 && Counter}
        <img
          src={ingredient.image}
          className={styles.Image}
          alt="ингредиент"
        ></img>
        <div className={styles.Price}>
          {ingredient.price}
          <CurrencyIcon />
        </div>
        <h3 className="text text_type_main-small">{ingredient.name}</h3>
      </li>
    </>
  );

  return view;
}



BurgerIngredient.propTypes = {
  ingredient: PropTypes.object,
};



