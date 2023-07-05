import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Add from './components/Add';
import Login from './components/Login';
import Logout from './components/Logout';
import Edit from './components/Edit';
import '../src/assets/css/reset.css'
import List from './components/List';


const AppProvider = ({ contexts, children }) => contexts.reduce(
  (prev, context) => React.createElement(context, {
    children: prev
  }),
  children
);

const App = () => {
  return (
    <>
      <div id="wrap">
        <BrowserRouter>
          <AppProvider contexts={[]}>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/list' element={<List />} />
              <Route path='/add' element={<Add />} />
              <Route path='/login' element={<Login />} />
              <Route path='/logout' element={<Logout />} />
              <Route path='/edit'>
                <Route path=':editID' element={<Edit />} />
              </Route>
            </Routes>
            <Footer />
          </AppProvider>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;