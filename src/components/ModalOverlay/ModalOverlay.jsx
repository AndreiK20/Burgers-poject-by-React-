import styles from "./ModalOverlay.module.css";

export const ModalOverlay = ({handleClose}) => {
  return  (
  <div className={styles.ModalOverlay} onClick={handleClose}></div>
  );
};
