import styles from "./Modal.module.css";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import { useEffect } from "react";

export const Modal = ({ handleClose, modalContent }) => {
  useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === "Escape") {
        handleClose();
      }
    }
    document.addEventListener("keydown", closeByEscape);
    return () => {
      document.removeEventListener("keydown", closeByEscape);
    };
  }, []);

  return (
    <>
      <ModalOverlay handleClose={handleClose} modalContent={modalContent}/>
      <div className={styles.Modal}>
        <button onClick={handleClose} className={styles.Close}></button>
        <div>{modalContent}</div>
      </div>
    </>
  );
};
