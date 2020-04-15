import React from "react";
import styles from "./AddPostForm.module.css";
import { Field, reduxForm } from "redux-form";
import {required, maxLengthCreator} from "../../../../utils/validators/validators.js";
import { Textarea } from "./../../../Common/FormsControls/FormsControls.jsx"

const maxLength10 = maxLengthCreator(10);

const AddPostForm = props => {
    return (
      <form onSubmit={props.handleSubmit} className={styles.postsBlock}>
        <div>
          <Field component={Textarea} name="newPostBody" placeholder="Введите текст..." validate={[required, maxLength10]} />
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