import React from "react";
import { myState } from "../object";
import styles from "./MyProfile.module.css";
import Modal from "./Modal";

const formatDate = (date) => {
  const newDate = new Date(date);
  return `${newDate.getDate()}/${
    newDate.getMonth() + 1
  }/${newDate.getFullYear()}`;
};

const MyProfile = (props) => {
  const showModal = (e, modalName) => {
    e.preventDefault();
    props.setPublicationModalVisible(modalName);
  };

  return (
    <div className={styles.card}>
      <p>
        <div>
          <img src={myState.profileData.profilePicture} />
        </div>
        <span>{myState.firstname}</span> <span>{myState.lastname}</span>
      </p>
      <div>
        <p>{myState.profileData.username}</p>
        <p>{myState.email}</p>
        <p>{myState.phoneNumber}</p>
        <p>{formatDate(myState.profileData.createdAt)}</p>
      </div>
      <div>
        <button onClick={(e) => showModal(e, "edit")}>Edit account</button>
        {props.publicationModalVisible === "edit" && (
          <Modal setPublicationModalVisible={props.setPublicationModalVisible}>
            EDIT ACCOUNT
          </Modal>
        )}
        <button onClick={(e) => showModal(e, "upload")}>
          Upload a picture
        </button>
        {props.publicationModalVisible === "upload" && (
          <Modal setPublicationModalVisible={props.setPublicationModalVisible}>
            UPLOAD
          </Modal>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
