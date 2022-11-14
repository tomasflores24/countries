import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import Main from './pages/Main';
import CreateActivity from './pages/CreateActivity';
import DetailContrie from './pages/DetailContrie';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <NavBar />
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/main' element={<Main />}/>
          <Route path='/detail/:id' element={<DetailContrie />}/>
          <Route path='/create' element={<CreateActivity />}/>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// * Falta hacer ---
// Cuando me traig los paisess , tambien traerme la actividad incluida
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
//
// 
// 
