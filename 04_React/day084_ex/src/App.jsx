import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';
import './assets/css/reset.css'
import Home from './components/Home';
import AddUser from './components/AddUser';
import Login from './components/Login';
import EditUser from './components/EditUser';
import UserProvider from './contexts/UserContext';

const AppProvider = ({ contexts, children }) => contexts.reduce(
  (prev, context) => React.createElement(context, {
    children: prev
  }),
  children
);

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppProvider contexts={[UserProvider]}>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add' element={<AddUser />} />
            <Route path='/login' element={<Login />} />
            <Route path='/edit'>
              <Route path=':editID' element={<EditUser />} />
            </Route>
          </Routes>
          <Footer />
        </AppProvider>
      </BrowserRouter>
    </>
  );
};

export default App;