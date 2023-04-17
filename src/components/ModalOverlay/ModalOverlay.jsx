import styles from "./ModalOverlay.module.css";

export const ModalOverlay = ({isOpen}) => {
  return isOpen ? (
  <div className={styles.ModalOverlay}></div>
  ) : null;
};
