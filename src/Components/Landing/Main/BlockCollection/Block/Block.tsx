import React, { useState } from 'react';
import style from './Block.module.scss';
import ReactCardFlip from 'react-card-flip';

type BlockType = {
  img: string;
  name: string;
  backImg: string;
};

const Block = (props: BlockType) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const { img, name, backImg } = props;
  return (
    <div className={style.main}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
        <div
          onMouseEnter={() => setIsFlipped(true)}
          onMouseLeave={() => setIsFlipped(false)}
          className={style.front}
        >
          <div className={style.content}>
            <p>
              <img className={style.img} src={img} />
            </p>
            <h2 className={style.name}>{name}</h2>
          </div>
        </div>
        <div
          onMouseEnter={() => setIsFlipped(true)}
          onMouseLeave={() => setIsFlipped(false)}
          className={style.back}
        >
          <img src={backImg} />
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Block;
