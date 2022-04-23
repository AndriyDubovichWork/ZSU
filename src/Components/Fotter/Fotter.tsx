import React from 'react';
import style from './Fotter.module.scss';

const Fotter = () => {
  return (
    <div className={style.fotter}>
      <div className={style.phoneAndAdress}>
        <h2>тел.факс (044) 454-45-73</h2>
        <h3>
          c_support_zsu@post.mil.gov.ua
          <br />
          03168, м. Київ, пр-кт Повітрофлотський, 6
        </h3>
      </div>
      <div className={style.LeadersContacts}>
        <a>Президент України</a>
        <br />
        <a>Верховна Рада України</a>
        <br />
        <a>Міністерство оборони України</a>
        <br />
        <a>Міністерство у справах ветеранів України</a>
      </div>
      <div className={style.FaceBookPagesOfArmies}>
        <a>Сухопутні війська</a>
        <br />
        <a>Повітряні Сили </a>
        <br />
        <a>Військово-Морські Сили</a>
        <br />
        <a>Десантно-штурмові війська</a>
        <br />
        <a>Сили спеціальних операцій</a>
        <br />
        <a>Військова служба правопорядку</a>
      </div>
      <div className={style.MainSocialMedias}>
        <a>I </a>
        <a>F </a>
        <a>Y</a>
      </div>
      <div className={style.SiteMap}>Карта сайту</div>
      <div className={style.Copyright}>©2021 Збройні Сили України</div>
    </div>
  );
};

export default Fotter;
