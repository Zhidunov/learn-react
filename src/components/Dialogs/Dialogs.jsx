import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";
import {
  addMessageActionCreator,
  updateNewMessageActionCreator
} from "./../../redux/dialogsReducer.js";

function Dialogs(props) {
  let dialogsElements = props.state.dialogs.map(d => (
    <DialogItem id={d.id} name={d.name} />
  ));

  let messagesElements = props.state.messages.map(m => (
    <Message id={m.id} message={m.message} />
  ));

  let newMessageText = React.createRef();

  function addMessage() {
    props.dispatch(addMessageActionCreator());
  }

  function onMessageChange() {
    let text = newMessageText.current.value;
    props.dispatch(updateNewMessageActionCreator(text));
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>{dialogsElements}</div>
      <div className={styles.dialogs_messages}>
        {messagesElements}

        <div>
          <textarea
            onChange={onMessageChange}
            value={props.state.newMessageText}
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
