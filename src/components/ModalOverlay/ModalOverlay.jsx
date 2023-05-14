import styles from "./ModalOverlay.module.css";
import PropTypes from "prop-types";

export const ModalOverlay = ({onClose}) => {
  return  (
  <div className={styles.ModalOverlay} onClick={onClose}></div>
  );
};

ModalOverlay.propTypes = {
	onClose: PropTypes.func.isRequired,
};