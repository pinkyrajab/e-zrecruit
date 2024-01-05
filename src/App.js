import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { HomePage } from './components/Home/Home';
import { Register } from './components/Logins/Register';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          {/* <Route path='/Login' element={<SignUp/>}/> */}
          <Route path='/Register' element={<Register/>}/>
        </Routes>
      </Router>
  );
}

export default App;
