import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";
import {
  addMessageActionCreator,
  updateNewMessageActionCreator
} from "./../../redux/state.js";

function Dialogs(props) {
  
  let store = props.store.getState().dialogsPage;
  
  let dialogsElements = store.dialogs.map(d => (
    <DialogItem id={d.id} name={d.name} />
  ));

  let messagesElements = store.messages.map(m => (
    <Message id={m.id} message={m.message} />
  ));

  let newMessageText = React.createRef();

  function addMessage() {
    props.store.dispatch(addMessageActionCreator());
  }

  function onMessageChange() {
    let text = newMessageText.current.value;
    debugger;
    props.store.dispatch(updateNewMessageActionCreator(text));
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>{dialogsElements}</div>
      <div className={styles.dialogs_messages}>
        <div>{messagesElements}</div>

        <div>
          <textarea
            onChange={onMessageChange}
            value={store.newMessageText}
            ref={newMessageText}
            cols="30"
            rows="5"
          />
        </div>
        <div>
          <button onClick={addMessage}>Отправить</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
