import React from 'react';
import style from './Fotter.module.scss';
import { SocialIcon } from 'react-social-icons';

const LeadersContactsArr = [
  { url: 'https://www.president.gov.ua/en', text: 'Президент України' },
  { url: 'https://www.rada.gov.ua/', text: 'Верховна Рада України' },
  { url: 'https://www.mil.gov.ua/', text: 'Міністерство оборони України' },
  {
    url: 'https://mva.gov.ua/ua',
    text: 'Міністерство у справах ветеранів України',
  },
];
const FaceBookPagesOfArmiesArr = [
  {
    url: 'https://www.facebook.com/UkrainianLandForces/',
    text: 'Сухопутні війська',
  },
  { url: 'https://www.facebook.com/kpszsu/', text: 'Повітряні Сили' },
  { url: 'https://navy.mil.gov.ua/', text: 'Військово-Морські Сили' },
  {
    url: 'https://www.dshv.mil.gov.ua/istoriya',
    text: 'Десантно-штурмові війська',
  },
  { url: 'http://sof.mil.gov.ua/join', text: 'Сили спеціальних операцій' },
  {
    url: 'https://www.facebook.com/UA.Military.Police/',
    text: ' Військова служба правопорядку',
  },
];
const MainSocialMediasArr = [
  'https://www.facebook.com/GeneralStaff.ua',
  'https://mobile.twitter.com/GeneralStaffUA',
  'https://www.youtube.com/channel/UC10u3bDYe1HMHOQLvufXqjA',
  'https://www.instagram.com/uaf_general_staff/',
];

const Fotter = () => {
  return (
    <footer className={style.fotter}>
      <div className={style.phoneAndAdress}>
        <h2>тел.факс (044) 454-45-73</h2>
        <h3>
          c_support_zsu@post.mil.gov.ua
          <br />
          03168, м. Київ, пр-кт Повітрофлотський, 6
        </h3>
      </div>
      <div className={style.LeadersContacts}>
        {LeadersContactsArr.map((obj) => {
          return (
            <div key={obj.url}>
              <a target='_blank' href={obj.url}>
                {obj.text}
              </a>
              <br />
            </div>
          );
        })}
      </div>
      <div className={style.FaceBookPagesOfArmies}>
        {FaceBookPagesOfArmiesArr.map((obj) => {
          return (
            <div key={obj.url}>
              <a target='_blank' href={obj.url}>
                {obj.text}
              </a>
              <br />
            </div>
          );
        })}
      </div>
      <div className={style.MainSocialMedias}>
        {MainSocialMediasArr.map((url: string) => {
          return (
            <SocialIcon
              target='_blank'
              key={url}
              url={url}
              style={{ height: '20px', width: '20px', margin: '0 10px' }}
              bgColor={'#fff'}
            />
          );
        })}
      </div>
      <div className={style.SiteMap}>Карта сайту</div>
      <div className={style.Copyright}>©2021 Збройні Сили України</div>
    </footer>
  );
};

export default Fotter;
