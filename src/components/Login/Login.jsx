import React from "react";
import { reduxForm, Field } from "redux-form";
import {required} from "./../../utils/validators/validators.js";
import { Input } from "./../Common/FormsControls/FormsControls.jsx";

const LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Логин"} name={"login"} component={Input} validate={[required]}/>
      </div>
      <div>
        <Field placeholder={"Пароль"} name={"password"} component={Input} validate={[required]}/>
      </div>
      <div>
        <input type={"checkbox"} name={"rememberMe"} component={Input} />
      </div>
      <div>
        <button>Войти</button>
      </div>
    </form>
  );
};
const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = props => {
  const onSubmit = formData => {
    console.log(formData);
  };

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
