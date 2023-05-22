import styles from "./Modal.module.css";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect } from "react";
import PropTypes from "prop-types";



export const Modal = (props) => {
  const { header, onClose } = props;

  function handleCloseButtonClick() {
    onClose();
  }


  useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === "Escape") {
        onClose();
      }
    }
    document.addEventListener("keydown", closeByEscape);
    return () => {
    document.removeEventListener("keydown", closeByEscape);
    };
  }, []);

  return  (
    <>
       <div className={styles.Modal}>
          <div  onClick={handleCloseButtonClick} className={styles.Close}>
            <CloseIcon />
          </div>
        <div className={styles.children}>{props.children}</div>
      </div>
      <ModalOverlay onClose={onClose}/> 
    </>
  )
}
Modal.propTypes = {
  children: PropTypes.element.isRequired,
  header: PropTypes.string,
};