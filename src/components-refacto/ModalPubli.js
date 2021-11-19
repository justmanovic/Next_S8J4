import Modal from "./Modal";
import styles from "./ModalPubli.module.css";
import { myState } from "../object";
import React from "react";

const ModalPubli = (props) => {
  return (
    <Modal setPublicationModalVisible={props.setPublicationModalVisible}>
      <div className={styles.pic}>
        <img src={myState.profileData.posts[props.post.id - 1].imageUrl} />
      </div>
      <div>
        <h2>Description</h2>
        <p>{props.post.description}</p>
        <h2>Hashtags</h2>
        {props.post.hashtags.map((hashtag) => (
          <span>{hashtag}</span>
        ))}
        <h2>Mentions</h2>
        {props.post.mentions.map((mention) => (
          <span>{mention}</span>
        ))}
      </div>
    </Modal>
  );
};

export default ModalPubli;
