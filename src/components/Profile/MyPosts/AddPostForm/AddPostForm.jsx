import React from "react";
import styles from "./AddPostForm.module.css";
import { Field, reduxForm } from "redux-form";

const AddPostForm = props => {
    return (
      <form onSubmit={props.handleSubmit} className={styles.postsBlock}>
        <div>
          <Field component="textarea" name="newPostBody" placeholder="Введите текст..." />
          <div>
            <button>Опубликовать</button>
            <button>Удалить</button>
          </div>
        </div>
      </form>
    );
  }
  
  const AddPostFormRedux = reduxForm({form: "profileAddPostForm"})(AddPostForm);

  export default AddPostFormRedux;