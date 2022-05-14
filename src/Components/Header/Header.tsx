import React from 'react';
import style from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import Slide from '@mui/material/Slide';
import AppBar from '@mui/material/AppBar';
import { Divider } from '@mui/material';

const Header = (props: any) => {
  const trigger = useScrollTrigger();
  return (
    <>
      <Slide appear={false} direction='down' in={!trigger}>
        <AppBar>
          <div className={style.Header}>
            <NavLink to='/ZSU' className={`${style.Logo}`}>
              ЗСУ
            </NavLink>
            <NavLink to='/ZSU/about_us' className={`${style.HeaderText}`}>
              ПРО НАС
            </NavLink>
            <NavLink to='/ZSU/Allnews' className={`${style.HeaderText}`}>
              НОВИНИ
            </NavLink>
            <NavLink to='/ZSU/Allnews' className={`${style.HeaderText}`}>
              ООС
            </NavLink>
            <NavLink to='/ZSU/Allnews' className={`${style.HeaderText}`}>
              КОРИСНЕ
            </NavLink>
            <NavLink to='/ZSU/Allnews' className={`${style.HeaderText}`}>
              КАР'ЄРА
            </NavLink>
            <NavLink to='/ZSU/Allnews' className={`${style.HeaderText}`}>
              МЕДІА
            </NavLink>
            <NavLink to='/ZSU/Allnews' className={`${style.HeaderText}`}>
              СТІНА ПАМ'ЯТІ
            </NavLink>
            <NavLink to='/ZSU/Allnews' className={`${style.HeaderText}`}>
              КОНТАКТИ
            </NavLink>
          </div>
        </AppBar>
      </Slide>
    </>
  );
};

export default Header;
