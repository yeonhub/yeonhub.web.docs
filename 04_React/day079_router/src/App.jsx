import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Project from './pages/Project';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/profile">profile</Link></li>
            <li><Link to="/project">project</Link></li>
          </ul>
        </nav>
        {/* 화면에 보이는 영역 */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='profile' element={<Profile />} />
          <Route path='project' element={<Project />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;