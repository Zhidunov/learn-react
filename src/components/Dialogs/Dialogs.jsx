import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";
import { Redirect } from "react-router-dom";
import AddMessageFormRedux from "./AddMessageForm/AddMessageForm";

function Dialogs(props) {
  let dialogsElements = props.dialogsPage.dialogs.map(d => (
    <DialogItem id={d.id} name={d.name} key={d.id} />
  ));

  let messagesElements = props.dialogsPage.messages.map(m => (
    <Message id={m.id} message={m.message} key={m.id} />
  ));

  function AddMessage(values){
    props.AddMessage(values.newMessageBody);
  }

  if(!props.isAuth){
    return <Redirect to={"/login"} />
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>{dialogsElements}</div>
      <div>{messagesElements}</div>
      <AddMessageFormRedux onSubmit={AddMessage} />
    </div>
  );
}

export default Dialogs;
