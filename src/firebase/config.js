// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDClRqv7DKDlGS5CVKAYYv_P4IrEpX8VLM",
  authDomain: "proyecto-final-reactjs-7e54d.firebaseapp.com",
  projectId: "proyecto-final-reactjs-7e54d",
  storageBucket: "proyecto-final-reactjs-7e54d.appspot.com",
  messagingSenderId: "82839283756",
  appId: "1:82839283756:web:b825951657971aa3854989"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)