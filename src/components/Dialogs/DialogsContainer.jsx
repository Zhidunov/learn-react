import React from "react";
import Dialogs from "./Dialogs.jsx";
import {
  addMessageActionCreator,
  updateNewMessageActionCreator
} from "./../../redux/dialogsReducer.js";

function DialogsContainer(props) {
  let state = props.store.getState().dialogsPage;

  function addMessage() {
    props.store.dispatch(addMessageActionCreator());
  }

  function onMessageChange(text) {
    props.store.dispatch(updateNewMessageActionCreator(text));
  }

  return (
    <Dialogs
      onMessageChange={onMessageChange}
      onAddMessage={addMessage}
      newMessageText={state.newMessageText}
      messages={state.messages}
      dialogs={state.dialogs}
    />
  );
}

export default DialogsContainer;
