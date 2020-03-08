import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";

function Dialogs(props) {
  let dialogsElements = props.dialogsPage.dialogs.map(d => (
    <DialogItem id={d.id} name={d.name} />
  ));

  let messagesElements = props.dialogsPage.messages.map(m => (
    <Message id={m.id} message={m.message} />
  ));

  let newMessageText = React.createRef();

  function onAddMessage() {
    props.onAddMessage();
  }

  function onMessageChange() {
    let text = newMessageText.current.value;
    props.onMessageChange(text);
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>{dialogsElements}</div>
      <div className={styles.dialogs_messages}>
        <div>{messagesElements}</div>

        <div>
          <textarea
            onChange={onMessageChange}
            value={props.dialogsPage.newMessageText}
            ref={newMessageText}
            cols="30"
            rows="5"
          />
        </div>
        <div>
          <button onClick={onAddMessage}>Отправить</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
