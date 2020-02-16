import React from "react";
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <a href='/profile'>Профиль</a>
      </div>
      <div className={styles.item}>
        <a href='/dialogs'>Сообщения</a>
      </div>
      <div className={styles.item}>
        <a href='/news'>Новости</a>
      </div>
      <div className={styles.item}>
        <a href='/music'>Музыка</a>
      </div>
      <div className={styles.item}>
        <a href='/settings'>Настройки</a>
      </div>
    </nav>
  );
}

export default Navigation;
