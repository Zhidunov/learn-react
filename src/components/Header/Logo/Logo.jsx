import React from 'react';
import logo from './header_logo.png';
import style from './Logo.module.css';

function Logo_img(){
    return <img src={logo} alt='logo' className={style.logo} />;
}

export default Logo_img;