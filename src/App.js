import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import ProgressbarPage from './pages/ProgressbarPage';
import MainNavigation from './components/Navigation/MainNavigation';


export default function App() {
  return (<BrowserRouter>
    <MainNavigation></MainNavigation>
    <main>
      <Routes>
        <Route path='/progressbar' exact element={<ProgressbarPage />}>
        </Route>
        <Route path='/todolist' exact>
        </Route>
        <Route path='/form' exact>
        </Route>
        <Route element={<Navigate to='/'></Navigate >}></Route>
      </Routes>
    </main>
  </BrowserRouter>);
}

