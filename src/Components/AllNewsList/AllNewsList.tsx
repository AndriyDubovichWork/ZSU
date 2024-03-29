import React from 'react';
//@ts-ignore
import style from './AllNewsList.module.scss';
import NewsUnit from './NewsUnit/NewsUnit';
import { someNews } from './../News/News';

const AllNewsList = () => {
  return (
    <div className={style.main}>
      <h2 className={style.Header}>Всі новини</h2>
      <div className={style.News}>
        {someNews.map((obj) => {
          return (
            <NewsUnit
              date={obj.date}
              header={obj.title}
              text={obj.text}
              id={obj.id}
              img={obj.img}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllNewsList;
