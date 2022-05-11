import React from 'react';
import Block from './Block/Block';
import style from './BlockCollection.module.scss';

type BlockType = { name: string; img: string; backImg: string; url: string };

type BlockCollectionType = {
  CardFliedData: BlockType[];
  Title: string;
  SubTitle: string;
};
const BlockCollection = (props: BlockCollectionType) => {
  const { CardFliedData, Title, SubTitle } = props;
  return (
    <div className={style.main}>
      <h1>{Title}</h1>
      <h3 className={style.SubTitle}>{SubTitle}</h3>
      <div className={style.Types}>
        {CardFliedData.map((obj: BlockType) => {
          return (
            <Block
              key={obj.url + obj.img}
              url={obj.url}
              img={obj.img}
              name={obj.name}
              backImg={obj.backImg}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BlockCollection;
