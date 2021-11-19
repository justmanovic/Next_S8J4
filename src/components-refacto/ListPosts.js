import React, { useState } from "react";
import { myState } from "../object";
import ModalPubli from "./ModalPubli";
import styles from "./ListPosts.module.css";

const ListPosts = (props) => {
  const openPreview = (e, postNumber) => {
    e.preventDefault();
    props.setPublicationModalVisible(postNumber);
  };

  return (
    <div className={styles.list}>
      {myState.profileData.posts.map((post) => (
        <>
          <div onClick={(e) => openPreview(e, post.id)}>
            <div className="divimg">
              <img src={post.imageUrl} />
            </div>
          </div>
          {props.publicationModalVisible === post.id && (
            <ModalPubli
              setPublicationModalVisible={props.setPublicationModalVisible}
              post={post}
            />
          )}
        </>
      ))}
    </div>
  );
};

export default ListPosts;
