import { useState } from "react";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerConstructor.module.css";
import PropTypes from "prop-types";

export function BurgerConstructor({ handleOpenOrderDetails, data }) {
  const someBun = data?.filter((item) => item.type === "bun") ?? [];
  const elements = data?.filter((item) => item.type !== "bun") ?? [];

  return (
    <section className={styles.Section}>
      <div className={styles.Column}>
        <div className={styles.ElementUp}>
          <ConstructorElement
            key={someBun[0]?._id}
            type="top"
            text={someBun[0]?.name + " (верх)"}
            price={someBun[0]?.price}
            thumbnail={someBun[0]?.image}
          />
        </div>
        <div className={styles.Lists}>
          {elements.map((element) => (
            <div className={styles.Element}>
              <DragIcon type="primary" />
              <ConstructorElement
                key={element?._id}
                text={element?.name}
                price={element?.price}
                thumbnail={element?.image}
              />
            </div>
          ))}
        </div>
        <div className={styles.ElementBottom}>
          <ConstructorElement
            id={someBun[0]?._id}
            key={someBun[0]?._id}
            type="bottom"
            isLocked={true}
            text={someBun[0]?.name + " (низ)"}
            price={someBun[0]?.price}
            thumbnail={someBun[0]?.image}
          />
        </div>

        <div className={`${styles.Price} ${" mt-10 mr-4"}`}>
          <span>
            {" "}
            <span
              className=" text text_type_digits-medium mr-2"
            >
              666
            </span>
            <CurrencyIcon type="primary" />
          </span>

          <div className=" ml-10">
            <div className={styles.but}>
              {" "}
              <Button
                onClick={handleOpenOrderDetails}
                htmlType="button"
                type="primary"
                size="large"
              >
                Оформить заказ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.array,
  handleOpenOrderDetails: PropTypes.func,
};


