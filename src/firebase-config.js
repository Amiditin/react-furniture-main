// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBc8D8HkQiH89KjfglUiZZhvmGS1TjXG6g",
  authDomain: "react-furniture-52f67.firebaseapp.com",
  projectId: "react-furniture-52f67",
  storageBucket: "react-furniture-52f67.appspot.com",
  messagingSenderId: "515143027607",
  appId: "1:515143027607:web:a143660bb8ffbfddfa52d2",
  measurementId: "G-HX1H2SHMFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const database = getFirestore();
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
