import React from "react";
import styles from "./MasonNavigation.module.css";
import news from "./news.png";
import profile from "./profile.png";
import music from "./music.png";
import games from "./games.png";
import settings from "./settings.png";
import messages from "./messages.png";
import users from "./users.png";

const MasonNavigation = () => {
  return (
    <div className={styles.MainContainer}>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.content}>
            <img
              src={news}
              alt="Новости"
            />
            <p>Новости</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.content}>
            <img
              src={profile}
              alt="Профиль"
            />
            <p>Профиль</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.content}>
            <img
              src={music}
              alt="Музыка"
            />
            <p>Музыка</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.content}>
            <img
              src={games}
              alt="Игры"
            />
            <p>Игры</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.content}>
            <img
              src={settings}
              alt="Настройки"
            />
            <p>Настройки</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.content}>
            <img
              src={messages}
              alt="Сообщения"
            />
            <p>Сообщения</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.content}>
            <img
              src={users}
              alt="Пользователи"
            />
            <p>Пользователи</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasonNavigation;