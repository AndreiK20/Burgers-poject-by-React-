import styles from "./BurgerIngredient.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { setCurrentIngredient } from "../../services/action/currentIngradients";
import { useSelector, useDispatch } from "react-redux";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";
import PropTypes from "prop-types";



export function BurgerIngredient({ingredient, id}) {
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

 
  
  return (
      <div
        className={styles.Card}
        onClick={handleOnclick}
      >
        {ingredient.count > 0 && <Counter count={ingredient.count} />}
        <img
          src={ingredient.image}
          className={styles.Image}
          alt={ingredient.name}
          ref={dragRef}
        ></img>
        <div className={styles.Price}>
          {ingredient.price}
          <CurrencyIcon />
        </div>
        <h3 className="text text_type_main-small">{ingredient.name}</h3>
      </div>
  );

}



BurgerIngredient.propTypes = {
  ingredient: PropTypes.object,
};



