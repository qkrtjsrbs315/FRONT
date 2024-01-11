import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Newfooter';
import Header from './components/header/Newheader';
import VolunteerEntryPage from './components/VolunteerEntryPage/VolunteerEntryPage';
import VolunteerHistoryPage from './components/volunteerhistorypage/volunteerhistorypage';
import './App.css';
import CreatePost from './components/post/createpost';
import Board from './components/post/board';
import BoardDetail from './components/post/boarddetail';

import HealthBoard from './components/post/healthboard';
import CarePage from './components/care/care';

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
      {/* <Route path='/ApplicationEntryPage' element={<ApplicationEntryPage/>} />
      <Route path='/ApplicationFillPage01' element={<ApplicationFillPage01/>} />
      <Route path='/ApplicationFillPage02' element={<ApplicationFillPage02/>} />
      <Route path='/ApplicationFillPage03' element={<ApplicationFillPage03/>} />
      <Route path='/ApplicationFillPage04' element={<ApplicationFillPage04/>} /> */}
      <Route path='/care' element={<CarePage />} />

      <Route path='/volunteerentrypage' element={<VolunteerEntryPage/>} />
      <Route path='/volunteerhistorypage' element={<VolunteerHistoryPage/>} />
    </Routes>
  </div>
  </div>
)

export default AppRoutes;
