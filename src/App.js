import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import ProgressbarPage from './pages/ProgressbarPage';
import MainNavigation from './components/Navigation/MainNavigation';
import ParallaxPage from './pages/ParallaxPage';
import GamePage from './pages/GamePage';

export default function App() {
  return (<BrowserRouter>
    <MainNavigation></MainNavigation>
    <main>
      <Routes>
        <Route path='/' exact element={<ParallaxPage />}>
        </Route>
        <Route path='/progressbar' exact element={<ProgressbarPage />}>
        </Route>
        <Route path='/todolist' exact>
        </Route>
        <Route path='/form' exact>
        </Route>
        <Route path='/game' exact element={<GamePage></GamePage>}>
        </Route>
        <Route element={<Navigate to='/'></Navigate >}></Route>
      </Routes>
    </main>
  </BrowserRouter>);
}

