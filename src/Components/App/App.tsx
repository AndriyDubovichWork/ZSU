import React from 'react';

//@ts-ignore
import style from './App.module.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Fotter from '../Fotter/Fotter';
import Main from './../Main/Main';
import News from './../News/News';
import NotFound from '../NotFound/NotFound';
import AllNewsList from './../AllNewsList/AllNewsList';
function App() {
  return (
    <div className={style.main}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/some-landing' element={<Main />} />
          <Route path='/some-landing/news/:id' element={<News />} />
          <Route path='/some-landing/Allnews' element={<AllNewsList />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
        <Fotter />
      </BrowserRouter>
    </div>
  );
}

export default App;
