import React, { useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { createPortal } from "react-dom";
import styles from "./modal.module.scss";

const Modal = ({ children, isOpen, onClose }) => {
  console.log("Modal isOpen:", isOpen); // Log isOpen prop
  const ref = useRef();

  useEffect(() => {
    function handleEscapeKeyPress(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKeyPress, true);
      document.addEventListener("mousedown", handleClickOutside, true);
      document.addEventListener("touchstart", handleClickOutside, true);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKeyPress, true);
      document.removeEventListener("mousedown", handleClickOutside, true);
      document.removeEventListener("touchstart", handleClickOutside, true);
    };
  }, [isOpen, onClose]);

  return isOpen
    ? createPortal(
      <div className={styles.overlay}>
            <div className={styles.styledmodal}>
            <div className={styles.modal} ref={ref}>
              {/* <button className={styles.closeButton} onClick={onClose}>
              <FaTimes />
            </button> */}
              {children}
            </div>
        </div>
          </div>,
        document.body
      )
    : null;
};

export default Modal;
