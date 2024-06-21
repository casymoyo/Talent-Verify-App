import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useContext, useState } from 'react';
import UserContext from './contexts/UserContext.js'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Dashboard from './Components/Dashboard.js';
import Login from './auth/Login.js';


function App() {
  const { isLoggedIn, user} = useContext(UserContext)
  console.log(user)
  return (
      <BrowserRouter>
        {true ? (
            <div className='app'>
              <Dashboard/>
            </div>
        ) : (
          <Routes>
            <Route path='/' element={<Login/>}/>
          </Routes>
        )}
      </BrowserRouter>
  );
}
export default App;
