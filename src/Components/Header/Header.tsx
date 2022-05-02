import React from 'react';
import style from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={style.Header}>
      <NavLink
        to='/some-landing'
        className={`${style.HeaderText} ${style.Logo}`}
      >
        ЗСУ НЕОФІЦІЙНИЙ САЙТ
      </NavLink>
      <NavLink
        to='/some-landing/Allnews'
        className={`${style.HeaderText} ${style.News} `}
      >
        НОВИНИ
      </NavLink>
    </header>
  );
};

export default Header;
