import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./IngredientDetails.module.css";

export const IngredientDetails = ({ data }) => {
    console.log(data.image_large)
  return (
    <div className={styles.Component}>
      <h2 className={`  ${styles.Title} ${"text text_type_main-large"}`}> Детали Ингридиента</h2>
      <img src={data.image_large} alt="картинка ингредиента"></img>
      <p className="text text_type_main-medium">{data.name}</p>
      <ul
        className={`${ styles.Inform}  ${"text text_type_main-small mt-8 pb-15"}`}>
        <li className={styles.Li}>
          <p className={styles.Text}>Калории, г</p>
          <span className="text text_type_digits-default">{data.calories}</span>
        </li>
        <li className={styles.Li}>
          <p className={styles.Text}>Белки, г</p>
          <span className="text text_type_digits-default">{data.proteins}</span>
        </li>
        <li className={styles.Li}>
          <p className={styles.Text}>Жиры, г</p>
          <span className="text text_type_digits-default">{data.fat}</span>
        </li>
        <li className={styles.Li}>
          <p className={styles.Text}>Углеводы, г </p>
          <span className="text text_type_digits-default">
            {data.carbohydrates}
          </span>
        </li>
      </ul>
    </div>
  );
};
