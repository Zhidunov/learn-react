import Dialogs from "./Dialogs.jsx";
import {
  addMessageActionCreator,
  updateNewMessageActionCreator
} from "./../../redux/dialogsReducer.js";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMessageChange: text => {
      dispatch(updateNewMessageActionCreator(text));
    },
    onAddMessage: () => {
      dispatch(addMessageActionCreator());
    }
  };
}

let DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

export default DialogsContainer;
