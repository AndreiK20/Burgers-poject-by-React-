import styles from "./ModalOverlay.module.css";

export const ModalOverlay = ({onClose}) => {
  return  (
  <div className={styles.ModalOverlay} onClick={onClose}></div>
  );
};
