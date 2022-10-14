import React,{useContext} from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext } from '../../store/Context';
import { getAuth, signOut } from 'firebase/auth';
import {useNavigate} from 'react-router-dom'
function Header() {
  const navigate=useNavigate()
  const {user}=useContext(AuthContext)
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <a onClick={()=>{navigate("/")}}><OlxLogo></OlxLogo></a>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          
          {user?<span>{user?`Hi ${user.displayName}`:'Login'}</span>:<span onClick={()=>navigate('/login')}>{user?`Hi ${user.displayName}`:'Login'}</span>}
          <hr />
        </div>
        {user&&<a onClick={()=>{
         const auth=getAuth();
         signOut(auth).then(()=>{navigate('/home')}) 
        }}>Logout</a>}
        <div className="sellMenu">
          <SellButton onClick={()=>{
            navigate('/create')
          }}></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <a onClick={()=>{navigate("/create")}}> SELL</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
