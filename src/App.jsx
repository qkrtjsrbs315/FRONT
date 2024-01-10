import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './components/home/home';

import './App.css';
import CreatePost from './components/post/createpost';
import Board from './components/post/board';
import HealthBoard from './components/post/healthboard';

function App() {
  return (
    <>

    </>

  );
}
const AppRoutes = () =>(
  <div className="app-container">
        <Header />
  <div className="app-content">
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/board' element={<Board/>} />
      <Route path='/post' element={<CreatePost/>} />
      <Route path='/healthboard' element={<HealthBoard/>} />
      

    </Routes>
  </div>
  </div>
)

export default AppRoutes;
