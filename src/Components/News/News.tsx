import React from 'react';
//@ts-ignore
import style from './News.module.scss';
import { useParams } from 'react-router-dom';
import img from './../../assets/imgs/Types/specOps.jpg';
export const someNews = [
  {
    id: 0,
    img: img,
    date: '20/04/22',
    title: 'Путін Здох 1',
    text:
      'hello hello hello hello hello hello hello hello hello ' +
      'hello hello hello ' +
      'hello hello hello hello hello hello hello hello hello hello' +
      ' hello hello hello hello hello hello hello hello hello hello ' +
      'hello hello hello hello hello hello hello hello hello hello hello' +
      ' hello hello hello hello hello hello hello hello hello' +
      ' hello hello hello hello hello hello hello hello hello ' +
      'hello hello hello hello hello hello hello hello hello ' +
      'hello hello hello ' +
      'hello hello hello hello hello hello hello hello hello hello' +
      ' hello hello hello hello hello hello hello hello hello hello ' +
      'hello hello hello hello hello hello hello hello hello hello hello' +
      ' hello hello hello hello hello hello hello hello hello' +
      ' hello hello hello hello hello hello hello hello hello ' +
      'hello hello hello hello hello hello hello hello hello ' +
      'hello hello hello ' +
      'hello hello hello hello hello hello hello hello hello hello' +
      ' hello hello hello hello hello hello hello hello hello hello ' +
      'hello hello hello hello hello hello hello hello hello hello hello' +
      ' hello hello hello hello hello hello hello hello hello' +
      ' hello hello hello hello hello hello hello hello hello ' +
      'hello hello hello hello hello hello hello hello hello ' +
      'hello hello hello ' +
      'hello hello hello hello hello hello hello hello hello hello' +
      ' hello hello hello hello hello hello hello hello hello hello ' +
      'hello hello hello hello hello hello hello hello hello hello hello' +
      ' hello hello hello hello hello hello hello hello hello' +
      ' hello hello hello hello hello hello hello hello hello ' +
      'hello hello hello hello hello hello hello hello hello ' +
      'hello hello hello ' +
      'hello hello hello hello hello hello hello hello hello hello' +
      ' hello hello hello hello hello hello hello hello hello hello ' +
      'hello hello hello hello hello hello hello hello hello hello hello' +
      ' hello hello hello hello hello hello hello hello hello' +
      ' hello hello hello hello hello hello hello hello hello ' +
      'hello hello hello hello hello hello hello hello hello ' +
      'hello hello hello ' +
      'hello hello hello hello hello hello hello hello hello hello' +
      ' hello hello hello hello hello hello hello hello hello hello ' +
      'hello hello hello hello hello hello hello hello hello hello hello' +
      ' hello hello hello hello hello hello hello hello hello' +
      ' hello hello hello hello hello hello hello hello hello ' +
      'hello hello hello hello hello hello hello hello hello ' +
      'hello hello hello ' +
      'hello hello hello hello hello hello hello hello hello hello' +
      ' hello hello hello hello hello hello hello hello hello hello ' +
      'hello hello hello hello hello hello hello hello hello hello hello' +
      ' hello hello hello hello hello hello hello hello hello' +
      ' hello hello hello hello hello hello hello hello hello ' +
      'hello hello hello hello',
  },
  {
    id: 1,
    img: img,
    date: '20/04/22',
    title: 'Путін Здох 2',
    text:
      'hello hello hello hello hello hello hello hello hello ' +
      'hello hello hello ' +
      'hello hello hello hello hello hello hello hello hello hello' +
      ' hello hello hello hello hello hello hello hello hello hello ' +
      'hello hello hello hello hello hello hello hello hello hello hello' +
      ' hello hello hello hello hello hello hello hello hello' +
      ' hello hello hello hello hello hello hello hello hello ' +
      'hello hello hello hello',
  },
  {
    id: 2,
    img: img,
    date: '20/04/22',
    title: 'Путін Здох 3',
    text:
      'hello hello hello hello hello hello hello hello hello ' +
      'hello hello hello ' +
      'hello hello hello hello hello hello hello hello hello hello' +
      ' hello hello hello hello hello hello hello hello hello hello ' +
      'hello hello hello hello hello hello hello hello hello hello hello' +
      ' hello hello hello hello hello hello hello hello hello' +
      ' hello hello hello hello hello hello hello hello hello ' +
      'hello hello hello hello',
  },
  {
    id: 3,
    img: img,
    date: '20/04/22',
    title: 'Путін Здох 4',
    text:
      'hello hello hello hello hello hello hello hello hello ' +
      'hello hello hello ' +
      'hello hello hello hello hello hello hello hello hello hello' +
      ' hello hello hello hello hello hello hello hello hello hello ' +
      'hello hello hello hello hello hello hello hello hello hello hello' +
      ' hello hello hello hello hello hello hello hello hello' +
      ' hello hello hello hello hello hello hello hello hello ' +
      'hello hello hello hello',
  },
  {
    id: 4,
    img: img,
    date: '20/04/22',
    title: 'Путін Здох 5',
    text:
      'hello hello hello hello hello hello hello hello hello ' +
      'hello hello hello ' +
      'hello hello hello hello hello hello hello hello hello hello' +
      ' hello hello hello hello hello hello hello hello hello hello ' +
      'hello hello hello hello hello hello hello hello hello hello hello' +
      ' hello hello hello hello hello hello hello hello hello' +
      ' hello hello hello hello hello hello hello hello hello ' +
      'hello hello hello hello',
  },
  {
    id: 5,
    img: img,
    date: '20/04/22',
    title: 'Путін Здох 6',
    text:
      'hello hello hello hello hello hello hello hello hello ' +
      'hello hello hello ' +
      'hello hello hello hello hello hello hello hello hello hello' +
      ' hello hello hello hello hello hello hello hello hello hello ' +
      'hello hello hello hello hello hello hello hello hello hello hello' +
      ' hello hello hello hello hello hello hello hello hello' +
      ' hello hello hello hello hello hello hello hello hello ' +
      'hello hello hello hello',
  },
];

const News = () => {
  const { id } = useParams();
  return (
    <div className={style.News}>
      {someNews.map((obj) => {
        if (Number(id) === obj.id) {
          return (
            <>
              <h1 className={style.title}>{obj.title}</h1>
              <h4>{obj.date}</h4>
              <img className={style.img} src={obj.img} />
              <h3>{obj.text}</h3>
            </>
          );
        }
      })}
    </div>
  );
};

export default News;
