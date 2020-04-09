import Dialogs from "./Dialogs.jsx";
import {
  addMessageActionCreator,
  updateNewMessageActionCreator
} from "./../../redux/dialogsReducer.js";
import { connect } from "react-redux";
import { withAuthRedirect } from "./../hoc/withAuthRedirect.js";

let AuthRedirectComponent = withAuthRedirect(Dialogs);

function mapStateToProps(state) {
  return {
    dialogsPage: state.dialogsPage
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
)(AuthRedirectComponent);

export default DialogsContainer;
