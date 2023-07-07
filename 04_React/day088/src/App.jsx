import React from 'react';
import './assets/css/reset.css'
import TodoList from './pages/todos/TodoList';
import './assets/css/common.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import UserList from './pages/users/UserList';
import UserPage from './pages/users/UserPage';
import Layout from './components/Layout';
import Post from './pages/post/Post';
import Contents from './components/Contents';



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Contents />} />
            <Route path='/post' element={<Post />} />
            <Route path='/user'>
              <Route index element={<UserList />} />
              <Route path=':userId' element={<UserPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;