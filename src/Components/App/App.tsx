import React from 'react';

//@ts-ignore
import style from './App.module.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Fotter from '../Fotter/Fotter';
import Main from './../Main/Main';

function App() {
  return (
    <div className={style.main}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/some-landing' element={<Main />} />
        </Routes>
        <Fotter />
      </BrowserRouter>
    </div>
  );
}

export default App;
