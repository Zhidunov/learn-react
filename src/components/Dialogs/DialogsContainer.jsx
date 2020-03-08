import React from "react";
import Dialogs from "./Dialogs.jsx";
import {
  addMessageActionCreator,
  updateNewMessageActionCreator
} from "./../../redux/dialogsReducer.js";
import StoreContext from "../../StoreContext.js";

function DialogsContainer(props) {
  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState().dialogsPage;

        function addMessage() {
          store.dispatch(addMessageActionCreator());
        }

        function onMessageChange(text) {
          store.dispatch(updateNewMessageActionCreator(text));
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
      }}
    </StoreContext.Consumer>
  );
}

export default DialogsContainer;
