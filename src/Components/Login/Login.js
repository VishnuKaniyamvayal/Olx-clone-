import React from 'react';
import { useState, useContext} from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const navigate=useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handlelogin =(e)=>{ e.preventDefault()
  const auth=getAuth();
  signInWithEmailAndPassword(auth,email,password).then(()=>{
    navigate('/home')
  }).catch((error)=>{alert(error.message)})

  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form  onSubmit={handlelogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a href='/signup'>Signup</a>
      </div>
    </div>
  );
}

export default Login;
