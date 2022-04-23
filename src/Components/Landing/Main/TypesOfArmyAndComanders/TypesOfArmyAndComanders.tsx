import React from 'react';
import style from './TypesOfArmy.module.scss';
import Block from '../BlockCollection/Block/Block';
import BlockCollection from '../BlockCollection/BlockCollection';

import airForces from '../../../../assets/imgs/Types/airForces.png';
import landForces from '../../../../assets/imgs/Types/landForces.png';
import landingAirForces from '../../../../assets/imgs/Types/landingAirForces.png';
import seaForces from '../../../../assets/imgs/Types/seaForces.png';
import specOps from '../../../../assets/imgs/Types/specOps.png';

import landForcesArmy from '../../../../assets/imgs/Types/tanks.jpg';
import airForcesArmy from '../../../../assets/imgs/Types/plane.jpg';
import seaForcesArmy from '../../../../assets/imgs/Types/boat.jpg';
import LandingForcesArmy from '../../../../assets/imgs/Types/airLand_landing.jpg';
import specOpsForcesArmy from '../../../../assets/imgs/Types/specOps.jpg';

import UnitedLeadersLogo from '../../../../assets/imgs/Leaders/United.png';
import SupportLeadersLogo from '../../../../assets/imgs/Leaders/Support.png';
import MedicalLeadersLogo from '../../../../assets/imgs/Leaders/medical.png';
import LogisticsLeadersLogo from '../../../../assets/imgs/Leaders/Logistics.png';
import KiderSecurityLeadersLogo from '../../../../assets/imgs/Leaders/KiberSecurity.png';

import UnitedLeader from '../../../../assets/imgs/Leaders/UnitedLeader.png';
import SupportLeader from '../../../../assets/imgs/Leaders/SupportLeader.png';
import MedicalLeader from '../../../../assets/imgs/Leaders/medicalLeader.png';
import LogisticsLeader from '../../../../assets/imgs/Leaders/LogisticsLeader.png';
import KiberSecurityLeader from '../../../../assets/imgs/Leaders/KiberSecurityLeader.png';

const ArmyTypesFliedData = [
  {
    img: airForces,
    name: 'Повітряні сили',
    backImg: airForcesArmy,
  },
  {
    img: landForces,
    name: 'Сухопутні війська',
    backImg: landForcesArmy,
  },
  {
    img: landingAirForces,
    name: 'Десантно-штурмові війська',
    backImg: LandingForcesArmy,
  },
  {
    img: seaForces,
    name: 'Військово-Морські Сили',
    backImg: seaForcesArmy,
  },
  {
    img: specOps,
    name: 'Сили спеціальних операцій',
    backImg: specOpsForcesArmy,
  },
];
const ComandersFliedData = [
  {
    img: UnitedLeadersLogo,
    name: "Командування об'єднаних сил",
    backImg: UnitedLeader,
  },
  {
    img: SupportLeadersLogo,
    name: 'Командування сил підтримки',
    backImg: SupportLeader,
  },
  {
    img: MedicalLeadersLogo,
    name: 'Командування медичних сил',
    backImg: MedicalLeader,
  },
  {
    img: LogisticsLeadersLogo,
    name: 'Командування сил логістики',
    backImg: LogisticsLeader,
  },
  {
    img: KiderSecurityLeadersLogo,
    name: "Командування Військ зв'язку та кібербезпеки",
    backImg: KiberSecurityLeader,
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
