import { useState, useEffect } from "react";
import styles from "./App.module.css";
import { AppHeader } from "../AppHeader/AppHeader";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import { Modal } from "../Modal/Modal";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";
import { OrderDetails } from "../OrderDetails/OrderDetails";

import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../services/action/ingredients";
import { getElementsFromAPISelector } from "../../services/action/selectors/getElementsFromAPISelector";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  // const burgerLink = "https://norma.nomoreparties.space/api/ingredients";
  /*   useEffect(() => {
    fetch(burgerLink)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
      })
      .then((res) => setIngredients(res.data))
  }, []); */

  const handleOpenIngredients = (element) => {
    setIsOpen(true);
    setModalContent(<IngredientDetails data={element} />);
  };
  const handleClose = () => setIsOpen(false);

  // const handleOpenOrderDetails = () => {
  //   setIsOpen(true);
  //   setModalContent(<OrderDetails />);
  // };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <AppHeader />
        <main className={styles.General}>
          <div className={styles.Center}>
            <BurgerIngredients />
            <BurgerConstructor />
          </div>
        </main>
      </div>
    </DndProvider>
  );
}

export default App;
