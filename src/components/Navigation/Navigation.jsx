import React from "react";
import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import menuPNG from './navigation_icons/menu.png';
import newsPNG from './navigation_icons/news.png';
import profilePNG from './navigation_icons/profile.png';
import messagePNG from './navigation_icons/message.png';
import usersPNG from './navigation_icons/users.png';
import gamesPNG from './navigation_icons/games.png';
import settingsPNG from './navigation_icons/settings.png';
import loginPNG from './navigation_icons/login.png';


function Navigation(props) {
  return (
    <div className={styles.container} >
      <nav className={styles.navbar}>
        <ul className={styles.navbar_nav}>
          <li className={styles.logo}>
            <NavLink to="/" className={styles.nav_link}>
            <span className={styles.logo_text && styles.link_text}>На главную...</span>
            <img src={menuPNG} alt="Menu"/>
            </NavLink>
          </li>

          <li className={styles.nav_item}>
            <NavLink to="/news" className={styles.nav_link}>
                <img src={newsPNG} alt="News"/>
                <span className={styles.link_text}>Новости</span>
            </NavLink>
          </li>

          <li className={styles.nav_item}>
            <NavLink to="/profile" className={styles.nav_link}>
            <img src={profilePNG} alt="Profile"/>
              <span className={styles.link_text}>Профиль</span>
            </NavLink>
          </li>

          <li className={styles.nav_item}>
            <NavLink to="/dialogs" className={styles.nav_link}>
            <img src={messagePNG} alt="Messages"/>
              <span className={styles.link_text}>Сообщения</span>
            </NavLink>
          </li>

          <li className={styles.nav_item}>
            <NavLink to="/users" className={styles.nav_link}>
            <img src={usersPNG} alt="Users"/>
              <span className={styles.link_text}>Пользователи</span>
            </NavLink>
          </li>

          <li className={styles.nav_item}>
            <NavLink to="/games" className={styles.nav_link}>
            <img src={gamesPNG} alt="Games"/>
              <span className={styles.link_text}>Игры</span>
            </NavLink>
          </li>

          <li className={styles.nav_item}>
            <NavLink to="/settings" className={styles.nav_link}>
            <img src={settingsPNG} alt="Settings"/>
              <span className={styles.link_text}>Настройки</span>
            </NavLink>
          </li>

          <li className={styles.nav_item}>
          <NavLink to="/login" className={styles.nav_link}>
            <img src={loginPNG} alt="Login"/> 

              {props.isAuth ? (
              <div>
                <div>{props.login}</div>
                <div><button onClick={props.logout}>Log out</button></div>
              </div>
              ) : (
                <span className={styles.link_text}>Логин</span>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
      </div>
  );
}

export default Navigation;
