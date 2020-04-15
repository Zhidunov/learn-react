import Dialogs from "./Dialogs.jsx";
import {
  AddMessage
} from "./../../redux/dialogsReducer.js";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "./../hoc/withAuthRedirect.js";



function mapStateToProps(state) {
  return {
    dialogsPage: state.dialogsPage
  };
}

export default compose(
  connect(mapStateToProps, {AddMessage}),
  withAuthRedirect
)(Dialogs);
