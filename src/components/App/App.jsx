import styles from "./App.module.css";
import { useState, useEffect } from "react";
import { AppHeader } from "../AppHeader/AppHeader";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";   
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../services/action/ingredients";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { getElementsFromAPISelector } from "../../services/selectors/getElementsFromAPISelector";


function App() {
  const [ingredients, setIngredients] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  
  const dispatch = useDispatch();

  const { data, dataRequest, dataFailed } = useSelector(
    getElementsFromAPISelector
  );
 

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

  // const handleOpenIngredients = (element) => {
  //   setIsOpen(true);
  //   setModalContent(<IngredientDetails data={element} />);
  // };
  // const handleClose = () => setIsOpen(false);

  // const handleOpenOrderDetails = () => {
  //   setIsOpen(true);
  //   setModalContent(<OrderDetails />);
  // };

  return (
    <>
    {dataRequest  ?  (
      <h2>....Loading</h2>
    ) : (
      <div className="App">
        <AppHeader />
        <main className={styles.General}>
          <div className={styles.Center}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
          </div>
        </main>
      </div>
    )
  }
  </>
  );
}

export default App;
