import React from 'react';
import style from './NewsBlock.module.scss';
import NewsElement from './NewsElement/NewsElement';
import img from './../../../assets/imgs/Types/specOps.jpg';
import LastNews from './LastNews/LastNews';

export const someNews = [
  { id: 0, img: img, date: '20/04/22', title: 'Путін Здох', url: '/' },
  { id: 1, img: img, date: '20/04/22', title: 'Путін Здох', url: '/' },
  { id: 2, img: img, date: '20/04/22', title: 'Путін Здох', url: '/' },
  { id: 3, img: img, date: '20/04/22', title: 'Путін Здох', url: '/' },
  { id: 4, img: img, date: '20/04/22', title: 'Путін Здох', url: '/' },
  { id: 5, img: img, date: '20/04/22', title: 'Путін Здох', url: '/' },
];

const NewsBlock = () => {
  return (
    <>
      <div className={style.News}>
        <h1 className={style.title}>Головні новини</h1>
        <div className={style.NewsGrid}>
          {someNews.map((news) => {
            return <NewsElement key={news.id} news={news} />;
          })}
        </div>
      </div>
      <LastNews />
    </>
  );
};

export default NewsBlock;
