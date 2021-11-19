import React, { useState } from "react";
import styles from "./Modal.module.css";

const Modal = (props) => {
  const hideModal = () => {
    props.setPublicationModalVisible(false);
  };

  return (
    <>
      <div onClick={hideModal} className={styles.backdrop}>
        <div className={styles.modal}>{props.children}</div>
      </div>
    </>
  );
};

export default Modal;
