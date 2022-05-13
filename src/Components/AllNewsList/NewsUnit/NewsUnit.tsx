import React from 'react';
import { Link } from 'react-router-dom';
import style from './NewsUnit.module.scss';

type NewsUnitType = {
  date: string;
  header: string;
  url: string;
  text: string;
  img: string;
  id: number;
};

const NewsUnit = (props: NewsUnitType) => {
  const { date, header, url, img, id, text } = props;
  return (
    <Link className={style.NewsUnit} to={'/some-landing/news/' + id}>
      <div className={style.text}>
        <h4 className={style.date}>{date}</h4>
        <h1 className={style.header}>{header}</h1>
        <h4>{text.length >= 100 ? text.slice(0, 100) + '...' : text.length}</h4>
      </div>

      <img src={img} className={style.Image} />
    </Link>
  );
};

export default NewsUnit;
