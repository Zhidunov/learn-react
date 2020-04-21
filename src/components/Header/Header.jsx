import React from "react";
import Logo from "./Logo/Logo.jsx";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header(props) {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.loginBlock}>
        {props.isAuth ? (
          <div>
            {" "}
            {props.login} <button onClick={props.logout}>Log out</button>{" "}
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
}

export default Header;
