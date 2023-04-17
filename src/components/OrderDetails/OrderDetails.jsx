import styles from "./OrderDetails.module.css"
import flag from "../../Images/graphics.svg"
export const  OrderDetails = () => {
    return (
        <div className={`${styles.Section}  ${"pl-25 pr-25"}`}>
			<p className={`${styles.Number} ${"text text_type_digits-large pt-20"}`}>
				172634
			</p>
			<h2 className={`${styles.Title } ${"text text_type_main-default mt-8"}`}>
				идентификатор заказа
			</h2>
			<img className=" mt-15"  src={flag} alt="галочка" />
			<p className={`${styles.orderStatus} + ${"text text_type_main-small mt-15"}`}>
				Ваш заказ начали готовить
			</p>
			<p className={`${styles.Text}  ${"text text_type_main-small mt-2 pb-30"}`}>
				Дождитесь готовности на орбитральной станции
			</p>
		</div>
    )
}