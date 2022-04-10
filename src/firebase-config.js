import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBc8D8HkQiH89KjfglUiZZhvmGS1TjXG6g",
  authDomain: "react-furniture-52f67.firebaseapp.com",
  projectId: "react-furniture-52f67",
  storageBucket: "react-furniture-52f67.appspot.com",
  messagingSenderId: "515143027607",
  appId: "1:515143027607:web:a143660bb8ffbfddfa52d2",
  measurementId: "G-HX1H2SHMFW"
};


const app = initializeApp(firebaseConfig);

export const database = getFirestore();
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
