import {initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore'; 
const firebaseConfig = {
    apiKey: "AIzaSyD2BbPWpcnh9yjDK9590yMtdAMF4WfSCBQ",
    authDomain: "olx-clone-7c9ba.firebaseapp.com",
    projectId: "olx-clone-7c9ba",
    storageBucket: "olx-clone-7c9ba.appspot.com",
    messagingSenderId: "726050033587",
    appId: "1:726050033587:web:1e77e1f228eb4cec3985c6",
    measurementId: "G-SFMBCDGBRW"
  };
  const firebase=initializeApp(firebaseConfig)
  const db=getFirestore(firebase)
  export  default db
