import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATfC-_I7vso3ltLr4X_Xa7oiVZ22N7fso",
  authDomain: "sit313-51761.firebaseapp.com",
  projectId: "sit313-51761",
  storageBucket: "sit313-51761.appspot.com",
  messagingSenderId: "517457357104",
  appId: "1:517457357104:web:35c5d88c20b7492b0780f5",
 import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider,signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import {getFirestore, doc,  getDoc, setDoc} from 'firebase/firestore'
    
const firebaseConfig = {
  apiKey: "AIzaSyATfC-_I7vso3ltLr4X_Xa7oiVZ22N7fso",
  authDomain: "sit313-51761.firebaseapp.com",
  projectId: "sit313-51761",
  storageBucket: "sit313-51761.appspot.com",
  messagingSenderId: "517457357104",
  appId: "1:517457357104:web:35c5d88c20b7492b0780f5",
  measurementId: "G-73PS2TS711"
};
  const firebaseapp = initializeApp(firebaseConfig);
  const provider= new GoogleAuthProvider();
 
  provider.setCustomParameters({
  prompt:"select_account"
});
  
  export const auth=getAuth();
  export const signInWithGooglePopup =()=> signInWithPopup(auth,provider)
  export const db =getFirestore();
  export const createuserdocfromAuth = async(userAuth, additionalInformation ={}) =>

{
  if(!userAuth.email) return;

  const userDocRef=doc (db, 'users', userAuth.uid);
  console.log(userDocRef)


const userSnapShots = await getDoc(userDocRef);
console.log(userSnapShots)
console.log(userSnapShots.exists())

if(!userSnapShots.exists())
{
   const {displayName, email} =userAuth
   const createdAt = new Date();
   try{
    await setDoc(userDocRef,{
   displayName,
   email,
   createdAt,
   ...additionalInformation
    })
  }
    catch(error){
    console.log('error in creating', error.message)
    }

   }
   return userDocRef;
}

export async function createAuthUserWithEmailAndPassword (email,password)
{ 
  if(!email || !password) 
  return
  return await createUserWithEmailAndPassword(auth,email,password)
}

export async function signinAuthUserWithEmailAndPassword (email,password)
{ 
  if(!email || !password) 
  return
  return await signInWithEmailAndPassword(auth,email,password)
}


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore(app);



