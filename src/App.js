import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router >
        <Routes>
          <Route element={<Home />} path='/'/>
          <Route exact element={<Home />} path='/home'/>
          <Route exact element={<Signup/>} path='/signup'/>
          <Route exact element={<Login/>} path='/login'/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App
