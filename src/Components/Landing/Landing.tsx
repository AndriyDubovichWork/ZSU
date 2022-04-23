import React from 'react';
import Main from './Main/Main';
import Header from '../Header/Header';
import Fotter from '../Fotter/Fotter';

import style from './Landing.module.scss';

const Lending = () => {
  return (
    <div className={style.Landing}>
      <Header />
      <Main />
      <Fotter />
    </div>
  );
};

export default Lending;
