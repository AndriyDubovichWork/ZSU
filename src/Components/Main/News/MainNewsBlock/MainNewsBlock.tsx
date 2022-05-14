import React from 'react';
import style from './MainNewsBlock.module.scss';
import NewsElement from './NewsElement/NewsElement';
import img from './../../../../assets/imgs/Types/specOps.jpg';
import LastNews from '../LastNews/LastNews';
import Button from '../../../styled/Button/Button';
import { someNews } from './../../../News/News';

const MainNewsBlock = () => {
  return (
    <>
      <div className={style.News}>
        <h1 className={style.title}>Головні новини</h1>
        <div className={style.NewsGrid}>
          {someNews.map((news: any) => {
            return <NewsElement key={news.id} news={news} />;
          })}
        </div>
        <Button url='' />
      </div>
    </>
  );
};

export default MainNewsBlock;
