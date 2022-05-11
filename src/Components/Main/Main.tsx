import React from 'react';
import style from './Main.module.scss';
import TypesOfArmyAndComanders from './TypesOfArmyAndComanders/TypesOfArmyAndComanders';
import News from './News/News';

const Main = () => {
  return (
    <div className={style.main}>
      <TypesOfArmyAndComanders />
      <News />
      
    </div>
  );
};

export default Main;
