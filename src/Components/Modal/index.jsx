import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

import styles from "./styles.module.css";

export default function Modal({ show, onClose, children }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className={styles["c-modal"]}>
      <button
        className={styles["modal__button-close"]}
        onClick={handleCloseClick}
      >
        <div className={styles["modal__icon-close"]}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="11 11 30 30">
            <path d="M27.92 25l8.84-8.84 1.82-1.82c.27-.27.27-.71 0-.97l-1.95-1.95a.682.682 0 0 0-.97 0L25 22.08 14.34 11.42a.682.682 0 0 0-.97 0l-1.95 1.95c-.27.27-.27.71 0 .97L22.08 25 11.42 35.66c-.27.27-.27.71 0 .97l1.95 1.95c.27.27.71.27.97 0L25 27.92l8.84 8.84 1.82 1.82c.27.27.71.27.97 0l1.95-1.95c.27-.27.27-.71 0-.97L27.92 25z"></path>
          </svg>
        </div>
      </button>
      <div className={styles["modal__wrapper-content"]}>
        <div className={styles["modal__content"]}>{children}</div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}
Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

Modal.defaultProps = {
  show: false,
  onClose: () => {},
};
