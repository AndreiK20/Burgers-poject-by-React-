import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./IngredientDetails.module.css"

export const IngredientDetails = ({data}) => {
  const primer = () => console.log(data[0]);
  primer();
  return (
    <div className={styles.Component}>
      <img srs={data[0].image_large} alt="картинка ингредиента"></img>
      {data[0].name}
    </div>
  );
};
