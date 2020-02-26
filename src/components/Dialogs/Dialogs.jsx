import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";

function Dialogs(props) {
  let dialogsData = [
    { id: 1, name: "Андрей" },
    { id: 2, name: "Михаил" },
    { id: 3, name: "Дмитрий" },
    { id: 4, name: "Алексей" },
    { id: 5, name: "Константин" }
  ];

  let messages = [
    { id: 1, message: "Привет" },
    { id: 2, message: "Как дела" },
    { id: 3, message: "Чем занимаешься?" },
    { id: 4, message: "Ку" },
    { id: 5, message: "Дратуте" }
  ];

  let dialogsElements = dialogsData.map(dialog => (
    <DialogItem id={dialog.id} name={dialog.name} />
  ));

  let messagesElements = messages.map(message => (
    <Message message={message.message} />
  ));

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>{dialogsElements}</div>
      <div className={styles.dialogs_messages}>{messagesElements}</div>
    </div>
  );
}

export default Dialogs;
