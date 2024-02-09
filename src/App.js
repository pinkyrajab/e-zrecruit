// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { HomePage } from './components/Home/Home';
import { Register } from './components/Logins/Register';
import { AllJobs } from './components/JobOpenings/allJobs';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/jobOpenings' element={<AllJobs/>}/>
          <Route path='*' element={<HomePage/>}/>
         </Routes>
      </Router>
  );
}

export default App;
