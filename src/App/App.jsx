import { useState, useEffect } from "react";
import styles from "./App.module.css";
import { AppHeader } from "../components/AppHeader/AppHeader";
import { BurgerIngredients } from "../components/BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "../components/BurgerConstructor/BurgerConstructor";
import { Modal } from "../components/Modal/Modal";
import { ModalOverlay } from "../components/ModalOverlay/ModalOverlay"; 
import { IngredientDetails } from "../components/IngredientDetails/IngredientDetails";
import { OrderDetails } from "../components/OrderDetails/OrderDetails";


const burgerLink = "https://norma.nomoreparties.space/api/ingredients";

function App() {
  const [ingredients, setIngredient] = useState([]);
  const [elementData, setElementData] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState();

  useEffect(() => {
    fetch(burgerLink)
      .then((res) => res.json())
      .then((res) => setIngredient(res.data));
  }, []);
  const handleOpen = (element) => {
    if(elementData !== {}){
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
    setModalContent(<IngredientDetails data={ingredients} />)
    ;}
  const handleClose = () => setIsOpen(false);
   
  const HandleOpenOrderDetails = () => {
    setIsOpen(true)
    setModalContent(<OrderDetails/>)
  }



   

  return (
    <div className="App">
      <AppHeader />
      <main className={styles.General}>
        <div className={styles.Center}>
          <BurgerIngredients
            handleOpen={handleOpen}
            data={ingredients}
          />
          <BurgerConstructor data={ingredients} HandleOpenOrderDetails={HandleOpenOrderDetails} />
        </div>
        <Modal
          isOpen={isOpen}
          handleClose={handleClose}
          data={ingredients}
          modalContent={modalContent}
        />
        <ModalOverlay isOpen={isOpen} />
      </main>
    </div>
  );
}

export default App;
