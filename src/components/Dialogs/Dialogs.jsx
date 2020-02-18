import React from "react";
import styles from "./Dialogs.module.css";

function Dialogs(props) {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>
          <div className={styles.dialog}>Андрей</div>
          <div className={styles.dialog}>Михаил</div>
          <div className={styles.dialog}>Дмитрий</div>
          <div className={styles.dialog}>Алексей</div>
          <div className={styles.dialog}>Константин</div>
      </div>
      <div className={styles.dialogs_messages}>
          <div className={styles.message}>Привет!</div>
          <div className={styles.message}>Как дела?</div>
          <div className={styles.message}>Как успехи?</div>
      </div>
    </div>
  );
}

export default Dialogs;