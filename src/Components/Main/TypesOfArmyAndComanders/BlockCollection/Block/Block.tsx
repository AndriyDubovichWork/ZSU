import React, { useState } from 'react';
import style from './Block.module.scss';
import ReactCardFlip from 'react-card-flip';
import { SocialIcon } from 'react-social-icons';

type BlockType = {
  img: string;
  name: string;
  backImg: string;
  url: string;
};

const Block = (props: BlockType) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const { img, name, backImg, url } = props;
  return (
    <div className={style.main}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
        <div onClick={() => setIsFlipped(true)} className={style.front}>
          <div className={style.content}>
            <div className={style.ImageDiv}>
              <img className={style.img} src={img} />
            </div>
            <h2 className={style.name}>{name}</h2>
          </div>
        </div>
        <div onClick={() => setIsFlipped(false)} className={style.back}>
          <img src={backImg} />
          <div className={style.IconDiv}>
            <SocialIcon
              target='_blank'
              url={url}
              className={style.Icon}
              bgColor={'#fff'}
            />
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Block;
