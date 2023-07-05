import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Project from './pages/Project';
import Notfiles from './pages/Notfiles';
// import './assets/css/reset.css'

const data = [
  { title: 'html', info: 'html 설명' },
  { title: 'javascript', info: 'javascript 설명' },
  { title: 'react', info: 'react 설명' },
  { title: 'node', info: 'node 설명' },
]

const App = () => {
  return (
    <BrowserRouter>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        {/* 원리 이해용 실제로 이런 방식 사용 X */}
        <hr />
        <li><Link to="/project/html">html</Link></li>
        <li><Link to="/project/javascript">javascript</Link></li>
        <li><Link to="/project/react">react</Link></li>
        <li><Link to="/project/node">node</Link></li>
      </ul>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/project/:name' element={<Project data={data}/>} />
        {/* path="/페이지명/:사용자정의변수" */}
      </Routes>
    </BrowserRouter>

  );
};

export default App;