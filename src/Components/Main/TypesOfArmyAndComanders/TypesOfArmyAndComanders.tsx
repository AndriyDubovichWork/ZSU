import React from 'react';
//@ts-nocheck
import style from './TypesOfArmy.module.scss';
import BlockCollection from './BlockCollection/BlockCollection';

import airForces from '../../../assets/imgs/Types/airForces.png';
import landForces from '../../../assets/imgs/Types/landForces.png';
import landingAirForces from '../../../assets/imgs/Types/landingAirForces.png';
import seaForces from '../../../assets/imgs/Types/seaForces.png';
import specOps from '../../../assets/imgs/Types/specOps.png';

import landForcesArmy from '../../../assets/imgs/Types/tanks.jpg';
import airForcesArmy from '../../../assets/imgs/Types/plane.jpg';
import seaForcesArmy from '../../../assets/imgs/Types/boat.jpg';
import LandingForcesArmy from '../../../assets/imgs/Types/airLand_landing.jpg';
import specOpsForcesArmy from '../../../assets/imgs/Types/specOps.jpg';

import UnitedLeadersLogo from '../../../assets/imgs/Leaders/United.png';
import SupportLeadersLogo from '../../../assets/imgs/Leaders/Support.png';
import MedicalLeadersLogo from '../../../assets/imgs/Leaders/medical.png';
import LogisticsLeadersLogo from '../../../assets/imgs/Leaders/Logistics.png';
import KiderSecurityLeadersLogo from '../../../assets/imgs/Leaders/KiberSecurity.png';

import UnitedLeader from '../../../assets/imgs/Leaders/UnitedLeader.png';
import SupportLeader from '../../../assets/imgs/Leaders/SupportLeader.png';
import MedicalLeader from '../../../assets/imgs/Leaders/medicalLeader.png';
import LogisticsLeader from '../../../assets/imgs/Leaders/LogisticsLeader.png';
import KiberSecurityLeader from '../../../assets/imgs/Leaders/KiberSecurityLeader.png';

const ArmyTypesFliedData = [
  {
    img: airForces,
    name: 'Повітряні сили',
    backImg: airForcesArmy,
    url: 'https://www.facebook.com/kpszsu',
  },
  {
    img: landForces,
    name: 'Сухопутні війська',
    backImg: landForcesArmy,
    url: 'https://www.facebook.com/UkrainianLandForces/',
  },
  {
    img: landingAirForces,
    name: 'Десантно-штурмові війська',
    backImg: LandingForcesArmy,
    url: 'https://www.dshv.mil.gov.ua/',
  },
  {
    img: seaForces,
    name: 'Військово-Морські Сили',
    backImg: seaForcesArmy,
    url: 'https://navy.mil.gov.ua/',
  },
  {
    img: specOps,
    name: 'Сили спеціальних операцій',
    backImg: specOpsForcesArmy,
    url: 'https://sof.mil.gov.ua/',
  },
];
const ComandersFliedData = [
  {
    img: UnitedLeadersLogo,
    name: "Командування об'єднаних сил",
    backImg: UnitedLeader,
    url: 'https://www.facebook.com/JointForcesCommandAFU/',
  },
  {
    img: SupportLeadersLogo,
    name: 'Командування сил підтримки',
    backImg: SupportLeader,
    url: 'https://www.facebook.com/KSP.ZSU/',
  },
  {
    img: MedicalLeadersLogo,
    name: 'Командування медичних сил',
    backImg: MedicalLeader,
    url: 'https://www.facebook.com/Ukrmilitarymedic/',
  },
  {
    img: LogisticsLeadersLogo,
    name: 'Командування сил логістики',
    backImg: LogisticsLeader,
    url: 'https://www.facebook.com/kslpress/',
  },
  {
    img: KiderSecurityLeadersLogo,
    name: "Командування Військ зв'язку та кібербезпеки",
    backImg: KiberSecurityLeader,
    url: 'https://www.facebook.com/people/%D0%9A%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F-%D0%92%D1%96%D0%B9%D1%81%D1%8C%D0%BA-%D0%B7%D0%B2%D1%8F%D0%B7%D0%BA%D1%83-%D1%82%D0%B0-%D0%BA%D1%96%D0%B1%D0%B5%D1%80%D0%B1%D0%B5%D0%B7%D0%BF%D0%B5%D0%BA%D0%B8-%D0%97%D0%B1%D1%80%D0%BE%D0%B9%D0%BD%D0%B8%D1%85-%D0%A1%D0%B8%D0%BB-%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B8/100068260969934/',
  },
];

const TypesOfArmyAndComanders = () => {
  return (
    <div>
      <BlockCollection
        Title='Види, роди військ (сил)'
        SubTitle='Збройних Сил України'
        CardFliedData={ArmyTypesFliedData}
      />
      <BlockCollection
        Title='Командування'
        SubTitle='Збройних Сил України'
        CardFliedData={ComandersFliedData}
      />
    </div>
  );
};

export default TypesOfArmyAndComanders;
