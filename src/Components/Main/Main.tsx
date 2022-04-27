import React from 'react';
import style from './Main.module.scss';
import TypesOfArmyAndComanders from './TypesOfArmyAndComanders/TypesOfArmyAndComanders';
import NewsBlock from './NewsBlock/NewsBlock';

const Main = () => {
  return (
    <div className={style.main}>
      <TypesOfArmyAndComanders />
      <NewsBlock />
    </div>
  );
};

export default Main;
