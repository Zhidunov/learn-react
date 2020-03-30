import MyPosts from "./MyPosts.jsx";
import { addPost, updateNewPostText } from "./../../../redux/profileReducer.js";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    profilePage: state.profilePage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateNewPostText: text => {
      dispatch(updateNewPostText(text));
    },
    addPost: () => {
      dispatch(addPost());
    },
    deletePost: () => {
      alert("Удалено");
    }
  };
}

let MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);

export default MyPostsContainer;
