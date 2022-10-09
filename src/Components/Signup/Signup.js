import React from 'react';
import { useState,useContext } from 'react';
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/FirebaseContext';
import './Signup.css';
import { getAuth, createUserWithEmailAndPassword , updateProfile } from "firebase/auth";
import { addDoc ,collection  } from 'firebase/firestore';
import {useNavigate} from 'react-router-dom'
import db from '../../firebase/firestoreConfig'
export default function Signup() {
  const navigate= useNavigate();
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  // const {firebase} = useContext(FirebaseContext)
  const handleSubmit = (e)=>{ e.preventDefault();
  const auth=getAuth();
  createUserWithEmailAndPassword(auth,email,password).then((result=>{
    updateProfile(result.user,{displayName: username}).then(()=>{
      addDoc(collection(db,"users"),{
      id:result.user.uid,
      username:username,
      phone:phone
    }).then(()=>{ navigate("/login")
    })
        
    })
   
    
  }))
  
  }
  
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit} >
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>{setUsername(e.target.value)}}
            
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
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
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={phone}
            onChange={(e)=>{setPhone(e.target.value)}}
            name="phone"
            defaultValue="Doe"
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
          <button>Signup</button>
        </form>
        <a href='/login'>Login</a>
      </div>
    </div>
  );
}
