import React, { useState } from 'react';

//@ts-ignore
import style from './App.module.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Fotter from '../Fotter/Fotter';
import Main from './../Main/Main';
import News from './../News/News';
import NotFound from '../NotFound/NotFound';
import AllNewsList from './../AllNewsList/AllNewsList';
import Alert from '@mui/material/Alert';
import { Collapse, Tooltip } from '@mui/material';

function App() {
  const [showMessage, setShowMessage] = useState(true);
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
      {showMessage ? (
        <Alert
          onClose={() => setShowMessage(false)}
          severity='error'
          className={style.unofficial}
        >
          НЕОФІЦІЙНИЙ САЙТ
        </Alert>
      ) : (
        ''
      )}
    </div>
  );
}

export default App;
