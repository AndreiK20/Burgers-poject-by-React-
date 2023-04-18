import styles from "./Modal.module.css";
import { useEffect } from "react";

export const Modal = ({ isOpen, handleClose, modalContent}) => {

  useEffect(() => {
		document.addEventListener("keydown", (evt) => {
			closeModalByEscape(evt);
		});
	});


  function closeModalByEscape(evt) {
    if (evt.key === "Escape") {
      handleClose();
    }
  }

  return isOpen ? (
    <div className={styles.Modal}>
      <button onClick={handleClose} className={styles.Close}></button>
      <div>{modalContent}</div>
    </div>
  ) : null;
};
