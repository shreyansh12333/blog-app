// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import dotenv from "dotenv";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// dotenv.config({ path: "../.env" });
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-ecf78.firebaseapp.com",
  projectId: "mern-blog-ecf78",
  storageBucket: "mern-blog-ecf78.appspot.com",
  messagingSenderId: "1072815364302",
  appId: "1:1072815364302:web:aebe3a2aa2a08c5620189f",
  measurementId: "G-M4FY3M3E69",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
