import { useState, useEffect } from "react";
import styles from "./App.module.css";
import { AppHeader } from "../AppHeader/AppHeader";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import { Modal } from "../Modal/Modal";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";
import { OrderDetails } from "../OrderDetails/OrderDetails";

const burgerLink = "https://norma.nomoreparties.space/api/ingredients";

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState();


  useEffect(() => {
    fetch(burgerLink)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
      })
      .then((res) => setIngredients(res.data))
  }, []);

  const handleOpenIngredients = (element) => {
    setIsOpen(true);
    setModalContent(<IngredientDetails data={element} />);
  };
  const handleClose = () => setIsOpen(false);

  const handleOpenOrderDetails = () => {
    setIsOpen(true);
    setModalContent(<OrderDetails />);
  };

  return (
    <div className="App">
      <AppHeader />
      <main className={styles.General}>
        <div className={styles.Center}>
          <BurgerIngredients
            handleOpenIngredients={handleOpenIngredients}
            data={ingredients}
          />
          <BurgerConstructor
            data={ingredients}
            handleOpenOrderDetails={handleOpenOrderDetails}
          />
        </div>
        {isOpen && (
          <Modal
            isOpen={isOpen}
            handleClose={handleClose}
            modalContent={modalContent}
          />
        )}
      </main>
    </div>
  );
}

export default App;
