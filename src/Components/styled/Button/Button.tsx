import React from 'react';
import style from './Button.module.scss';

type ButtonType = {
  url: string;
};

const Button = (props: ButtonType) => {
  const { url } = props;
  return (
    <a href={url} className={style.button}>
      Button
    </a>
  );
};

export default Button;
