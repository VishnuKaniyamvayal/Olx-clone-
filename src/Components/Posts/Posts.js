import React,{useEffect,useContext,useState} from 'react';
import Heart from '../../assets/Heart';
import { AuthContext } from '../../store/Context';
import './Post.css';
import db from '../../firebase/firestoreConfig';
import { collection, getDocs, } from 'firebase/firestore';
import { async } from '@firebase/util';

function Posts() {
  const {user}=useContext(AuthContext)
  const [products, setProducts] = useState([])
  const collectionRef = collection(db, "Products")
  useEffect(() => {
    const set=async ()=>{
     const querySnapshot = await getDocs(collectionRef)
       querySnapshot.forEach((product)=>{
        setProducts(current=>[...current,product.data()])
      })
    
   }
  set();
  console.log(products)
}, [])
  
 
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          <div
            className="card"
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>Tue May 04 2021</span>
            </div>
          </div>
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          { 
            products.map(product=>{
            return(
            <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9;{product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name">{product.name}</p>
            </div>
            <div className="date">
              <span>{product.createdAt}</span>
            </div>
          </div>)})}
        </div>{console.log(products)}
      </div>
    </div>
  );

}

export default Posts;
