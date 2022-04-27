import React from 'react';
import style from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={style.Header}>
      <NavLink to='/some-landing' className={style.Logo}>
        ЗСУ НЕОФІЦІЙНИЙ САЙТ
      </NavLink>
    </header>
  );
};

export default Header;
