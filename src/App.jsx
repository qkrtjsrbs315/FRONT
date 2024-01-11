import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Newfooter';
import Header from './components/header/Newheader';
import './App.css';
import CreatePost from './components/post/createpost';
import Board from './components/post/board';
import BoardDetail from './components/post/boarddetail';

import HealthBoard from './components/post/healthboard';
import CarePage from './components/care/care';
import VolunteerHistoryWritePage from './components/volunteer/volunteerhistorywrite';
import VolunteerEntry from './components/volunteer/volunteerentry';
import VolunteerHistoryBoard from './components/volunteer/volunteerhistoryboard';

function App() {
  return (
    <>
    <h1>this is home main page</h1>
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
      <Route path='/board/:id' element={<BoardDetail/>} />
      <Route path='/post' element={<CreatePost/>} />
      <Route path='/healthboard' element={<HealthBoard/>} />
      <Route path='/care' element={<CarePage />} />
        <Route path='/volunteer' element={<  VolunteerEntry />} />
      <Route path='/volunteerwrite' element={<VolunteerHistoryWritePage />} />
        <Route path='/volunteerboard' element={<VolunteerHistoryBoard />} />

    </Routes>
  </div>
  </div>
)

export default AppRoutes;
