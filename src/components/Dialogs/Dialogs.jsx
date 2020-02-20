import React from "react";
import styles from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

function DialogItem(props){
    return (
        <div className={styles.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

function Message(props){
    return (
    <div className={styles.message}>{props.message}</div>
    )
}

function Dialogs(props) {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>
          <DialogItem id='1' name='Андрей'/>
          <DialogItem id='2' name='Михаил'/>
          <DialogItem id='3' name='Дмитрий'/>
          <DialogItem id='4' name='Алексей'/>
          <DialogItem id='5' name='Константин'/>
      </div>
      <div className={styles.dialogs_messages}>
          <Message message='Привет'/>
          <Message message='Как дела?'/>
          <Message message='Чем занимаешься?'/>
      </div>
    </div>
  );
}

export default Dialogs;