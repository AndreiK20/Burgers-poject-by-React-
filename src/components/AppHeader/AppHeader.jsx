import {
  Logo,
  BurgerIcon,
  ProfileIcon,
  ListIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./AppHeader.module.css";

export const AppHeader = () => {
  return (
    <header>
      <nav className={styles.General}>
        <ul className={styles.Lists}>
          <li>
            <a
              href="#"
              className={`${styles.Container} ${"text text_type_main-default"}`}
            >
              <BurgerIcon />
              <p className={`${styles.Item} ${"text text_type_main-default"}`}>
                Конструктор
              </p>
              <ListIcon />
              <p className={`${styles.Item} ${"text text_type_main-default"}`}>
                Лента заказов
              </p>
            </a>
          </li>
          <li>
            <Logo />
          </li>
          <li className={styles.List}>
            <a href="#" className={styles.Item}>
              <ProfileIcon />
              <p className={"text text_type_main-default"}>
                Личный кабинет
              </p>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
