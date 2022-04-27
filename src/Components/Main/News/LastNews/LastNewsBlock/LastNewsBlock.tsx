import React from 'react';
import style from './LastNewsBlock.module.scss';
import { NavLink } from 'react-router-dom';

type NewsElementType = {
  news: { img: string; date: string; title: string; url: string };
};
const LastNewsBlock = (props: NewsElementType) => {
  const { img, date, title, url } = props.news;
  return (
    <NavLink className={style.main} to={url}>
      <div className={style.text}>
        <h4 className={style.Date}>{date}</h4>
        <h2 className={style.Title}>{title}</h2>
      </div>
      <p>
        <img className={style.IMG} src={img} />
      </p>
    </NavLink>
  );
};

export default LastNewsBlock;
