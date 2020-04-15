import MyPosts from "./MyPosts.jsx";
import { addPost } from "./../../../redux/profileReducer.js";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    profilePage: state.profilePage
  };
}

let MyPostsContainer = connect(
  mapStateToProps,
  {addPost}
)(MyPosts);

export default MyPostsContainer;
