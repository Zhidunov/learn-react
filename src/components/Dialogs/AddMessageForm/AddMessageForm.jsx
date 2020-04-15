import React from "react";
import styles from "./AddMessageForm.module.css";
import { Button } from "./../../Common/Button/Button.jsx";
import { reduxForm, Field } from "redux-form";

const AddMessageForm = props => {
  return (
      <form onSubmit={props.handleSubmit} className={styles.dialogs_messages}>
          <Field component="textarea" name="newMessageBody" placeholder="Введите новое сообщение..." />
          <Button
            type="button"
            buttonStyle="btn--primary--outline"
          >
            Отправить
          </Button>
      </form>
  )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default AddMessageFormRedux;

