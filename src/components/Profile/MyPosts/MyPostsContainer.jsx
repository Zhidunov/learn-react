import MyPosts from "./MyPosts.jsx";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator
} from "./../../../redux/profileReducer.js";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    dialogsPage: state.dialogsPage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateNewPostText: text => {
      dispatch(updateNewPostTextActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
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
