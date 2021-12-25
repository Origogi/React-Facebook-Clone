// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBZoy7sDC_nyfRDCchKIXZjkTkHItg-4sE",
  authDomain: "facebook-clone-c4a66.firebaseapp.com",
  projectId: "facebook-clone-c4a66",
  storageBucket: "facebook-clone-c4a66.appspot.com",
  messagingSenderId: "732570602179",
  appId: "1:732570602179:web:a3505eaa9a72bbfa787076",
  measurementId: "G-V1QYVMJXLK",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

const provider = new GoogleAuthProvider();

export { auth, provider}
export default db


