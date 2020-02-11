import React from "react";
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <a href='#a'>Профиль</a>
      </div>
      <div className={styles.item}>
        <a href='#a'>Сообщения</a>
      </div>
      <div className={styles.item}>
        <a href='#a'>Новости</a>
      </div>
      <div className={styles.item}>
        <a href='#a'>Музыка</a>
      </div>
      <div className={styles.item}>
        <a href='#a'>Настройки</a>
      </div>
    </nav>
  );
}

export default Navigation;
