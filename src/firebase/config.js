// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQqpkt3_DU8g0VLxhkMfpoZiV9anZ-XlI",
  authDomain: "proyecto1-97a93.firebaseapp.com",
  projectId: "proyecto1-97a93",
  storageBucket: "proyecto1-97a93.appspot.com",
  messagingSenderId: "378332674988",
  appId: "1:378332674988:web:11e1bb0809db1c18839809"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)