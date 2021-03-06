import React from "react";
import { reduxForm, Field } from "redux-form";
import { required } from "./../../utils/validators/validators.js";
import { Input } from "./../Common/FormsControls/FormsControls.jsx";
import { connect } from "react-redux";
import { login, logout } from "./../../redux/authReducer";
import { Redirect } from "react-router-dom";
import styles from "./Login.module.css";

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h1>LOGIN</h1>
      <div>
        <Field
          placeholder={"E-mail"}
          name={"email"}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder={"Пароль"}
          name={"password"}
          type={"password"}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <input type={"checkbox"} name={"rememberMe"} component={Input} />
      </div>
      {error && <div className={styles.formSummaryError}>{error}</div>}
      <div>
        <button>Войти</button>
      </div>
    </form>
  );
};
const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div className={styles.container}>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { login, logout })(Login);
