import React from 'react';
import style from './Main.module.scss';
import TypesOfArmyAndComanders from './TypesOfArmyAndComanders/TypesOfArmyAndComanders';

const Main = () => {
  return (
    <div className={style.main}>
      <TypesOfArmyAndComanders />
    </div>
  );
};

export default Main;
