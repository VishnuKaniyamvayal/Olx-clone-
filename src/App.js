import React,{useEffect,useContext} from 'react';
import './App.css';
import Home from './Pages/Home';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import {AuthContext, FirebaseContext} from './store/Context'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Create from "./Pages/Create"


function App() {
  const {setUser} = useContext(AuthContext)
  useEffect(()=>{
    const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    setUser(user)
});
  })
  return (
    <div>
      <Router >
        <Routes>
          <Route element={<Home />} path='/'/>
          <Route exact element={<Home />} path='/home'/>
          <Route exact element={<Signup/>} path='/signup'/>
          <Route exact element={<Login/>} path='/login'/>
          <Route exact element={<Create/>} path='/create'/>
        </Routes>
      </Router>
    </div>
  );
}

export default App
