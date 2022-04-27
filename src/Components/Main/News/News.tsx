import React from 'react';
import LastNews from './LastNews/LastNews';
import MainNewsBlock from './MainNewsBlock/MainNewsBlock';
import style from './News.module.scss';
const News = () => {
  return (
    <div className={style.News}>
      <MainNewsBlock />
      <LastNews />
    </div>
  );
};

export default News;
