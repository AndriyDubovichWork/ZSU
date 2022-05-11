import React from 'react';
import style from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import Slide from '@mui/material/Slide';
import AppBar from '@mui/material/AppBar';

const Header = (props: any) => {
  const trigger = useScrollTrigger();
  return (
    <>
      <Slide appear={false} direction='down' in={!trigger}>
        <AppBar>
          <div className={style.Header}>
            <NavLink
              to='/some-landing'
              className={`${style.HeaderText} ${style.Logo}`}
            >
              ЗСУ
            </NavLink>
            <NavLink
              to='/some-landing/Allnews'
              className={`${style.HeaderText}`}
            >
              НОВИНИ
            </NavLink>
            <NavLink
              to='/some-landing/Allnews'
              className={`${style.HeaderText}`}
            >
              також НОВИНИ
            </NavLink>
          </div>
        </AppBar>
      </Slide>
    </>
  );
};

export default Header;
