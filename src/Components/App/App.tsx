import React from 'react';
import Landing from '../Landing/Landing';
//@ts-ignore
import style from './App.module.scss';

function App() {
  return (
    <div className={style.main}>
      <Landing />
    </div>
  );
}

export default App;
