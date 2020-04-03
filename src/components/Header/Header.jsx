import React from "react";
import Logo from "./Logo/Logo.jsx";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header(props) {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.loginBlock}>
        { props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink> }
      </div>
    </header>
  );
}

export default Header;
