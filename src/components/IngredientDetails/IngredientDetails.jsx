import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./IngredientDetails.module.css";
import PropTypes from "prop-types";

export const IngredientDetails = ({ingredient }) => {
  return (
    <div className={styles.Component}>
      <h2 className={`  ${styles.Title} ${"text text_type_main-large"}`}> Детали Ингридиента</h2>
      <img className={styles.Image} src={ingredient.image_large} alt={ingredient.name}></img>
      <p className="text text_type_main-medium">{ingredient.name}</p>
      <ul
        className={`${ styles.Inform}  ${"text text_type_main-small mt-8 pb-15"}`}>
        <li className={styles.Li}>
          <p className={styles.Text}>Калории, г</p>
          <span className="text text_type_digits-default">{ingredient.calories}</span>
        </li>
        <li className={styles.Li}>
          <p className={styles.Text}>Белки, г</p>
          <span className="text text_type_digits-default">{ingredient.proteins}</span>
        </li>
        <li className={styles.Li}>
          <p className={styles.Text}>Жиры, г</p>
          <span className="text text_type_digits-default">{ingredient.fat}</span>
        </li>
        <li className={styles.Li}>
          <p className={styles.Text}>Углеводы, г </p>
          <span className="text text_type_digits-default">
            {ingredient.carbohydrates}
          </span>
        </li>
      </ul>
    </div>
  );
};

IngredientDetails.propTypes = {
  ingredient: PropTypes.object,
};