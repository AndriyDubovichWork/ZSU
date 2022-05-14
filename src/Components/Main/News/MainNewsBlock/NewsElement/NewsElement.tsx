import React from 'react';
import style from './NewsElement.module.scss';
import { NavLink } from 'react-router-dom';

type NewsElementType = {
  news: { img: string; date: string; title: string; id: number };
};

const NewsElement = (props: NewsElementType) => {
  return (
    <NavLink to={`/ZSU/news/${props.news.id}`} className={style.news}>
      <img src={props.news.img} />
      <div className={style.Text}>
        <h4 className={style.Date}>{props.news.date}</h4>
        <h2 className={style.Title}>{props.news.title}</h2>
      </div>
    </NavLink>
  );
};

export default NewsElement;
