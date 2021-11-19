import React, { useState } from "react";
import ModalPubli from "./components-refacto/ModalPubli";
import ListPosts from "./components-refacto/ListPosts";
import MyProfile from "./components-refacto/MyProfile";

// updatePic() {
//   alert("J'update la publcation avec l'id : " + this.state.profileData.posts[this.state.previewItem].id);
// }

// deletePic() {
//   alert("Je supprime la publcation avec l'id : " + this.state.profileData.posts[this.state.previewItem].id);
// }

// uploadPicture() {
//   alert("J'upload une image avec la description : " + this.state.description + " et les hashtags " + this.state.hashtags + " et les mentions " + this.state.mentions);
// }



const AppRefacto = () => {
  const [publicationModalVisible, setPublicationModalVisible] = useState(false);

  return (
    <div>
      <MyProfile
        setPublicationModalVisible={setPublicationModalVisible}
        publicationModalVisible={publicationModalVisible}
      />
      <h2>Publications</h2>
      <ListPosts
        setPublicationModalVisible={setPublicationModalVisible}
        publicationModalVisible={publicationModalVisible}
      />
    </div>
  );
};

export default AppRefacto;
