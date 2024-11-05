import React, { useState } from "react";

import styles from "./AboutModal.module.css";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { modalClosed } from "../../Redux/AboutModalSlice.js";
const AboutModal = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.aboutModal);

  return (
    <>
      <Modal
        className={styles.modal}
        isOpen={isOpen}
        onRequestClose={() => dispatch(modalClosed())}
        contentLabel="Example Modal"
        overlayClassName={styles.modalOverlay}
      >
        <button onClick={() => dispatch(modalClosed())} className={styles.btn}>
          X
        </button>
        <div className={styles.text}>
          <h3>Contact</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            quasi expedita architecto ratione quae, dicta accusamus veritatis,
            sit quidem quam perferendis, ipsum a. Unde qui culpa in accusamus
            eveniet sit?
          </p>
        </div>
      </Modal>
    </>
  );
};

export default AboutModal;
