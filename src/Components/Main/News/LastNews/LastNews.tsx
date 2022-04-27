import React from 'react';
import style from './LastNews.module.scss';
import LastNewsBlock from './LastNewsBlock/LastNewsBlock';
import { someNews } from '../MainNewsBlock/MainNewsBlock';

type NewsType = {
  id: number;
  img: string;
  date: string;
  title: string;
  url: string;
};

const LastNews = () => {
  return (
    <div className={style.main}>
      <h1 className={style.Title}>Останні новини</h1>
      <div className={style.News}>
        {someNews.map((news: NewsType) => {
          return <LastNewsBlock key={news.id} news={news} />;
        })}
      </div>
    </div>
  );
};

export default LastNews;
