import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";

function Dialogs(props) {
  let dialogsElements = props.state.dialogs.map(d => (
    <DialogItem id={d.id} name={d.name} />
  ));

  let messagesElements = props.state.messages.map(m => (
    <Message message={m.message} />
  ));

  let textMessage = React.createRef();

  function addMessage() {
    props.addMessage();
  }

  function onMessageChange() {
    let text = textMessage.current.value;
    props.updateNewMessageText(text);
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>{dialogsElements}</div>
      <div className={styles.dialogs_messages}>
        {messagesElements}{" "}
        <div>
          <textarea
            onChange={onMessageChange}
            value={props.newMessageText}
            ref={textMessage}
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
