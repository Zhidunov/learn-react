import Dialogs from "./Dialogs.jsx";
import {
  addMessageActionCreator,
  updateNewMessageActionCreator
} from "./../../redux/dialogsReducer.js";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "./../hoc/withAuthRedirect.js";



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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
