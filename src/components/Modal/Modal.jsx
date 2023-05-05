import styles from "./Modal.module.css";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
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
      <ModalOverlay onClose={onClose} />
      <div className={styles.Modal}>
        <button onClick={handleCloseButtonClick} className={styles.Close}></button>
        <div>{props.children}</div>
      </div>
    </>
  )
}
Modal.propTypes = {
  children: PropTypes.element.isRequired,
  header: PropTypes.string,
};