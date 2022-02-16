import SideBar from 'components/SideBar';
import AboutPage from 'pages/AboutPage';
import DashBoardPage from 'pages/DashBoardPage';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageURL } from 'types/pagesType';

const PagesRoutes: React.FC = () => {

  return (
    <BrowserRouter>
      <div className='flex w-screen h-screen bg-appBackground'>
        <SideBar />
        <Routes>
          <Route path={PageURL.DashBoardPage} element={<DashBoardPage />} />
          <Route path={PageURL.AboutPage} element={<AboutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default PagesRoutes;