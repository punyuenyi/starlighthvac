import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './index.css';

import * as Component  from './component/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL} >
    <Routes >
      <Route path='/' element={<App/>} >
        <Route path='/' element={<Component.About/>}/>
        <Route path='/projects' element={<Component.Project/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
