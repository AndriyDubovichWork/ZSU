import React from 'react';
import style from './HideOnScroll.module.scss';

import useScrollTrigger from '@mui/material/useScrollTrigger';

import Slide from '@mui/material/Slide';

type HideOnScrollType = {
  children: React.ReactElement;
};

const HideOnScroll = (props: HideOnScrollType) => {
  const { children } = props;

  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
};

export default HideOnScroll;
