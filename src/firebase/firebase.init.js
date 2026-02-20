// src/firebase/firebase.init.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId
// };



const firebaseConfig = {
  apiKey: "AIzaSyCGMePyucAm9Qz3BuifsGlwaGwmz1DI3aM",
  authDomain: "zap-shift-6bb1e.firebaseapp.com",
  projectId: "zap-shift-6bb1e",
  storageBucket: "zap-shift-6bb1e.firebasestorage.app",
  messagingSenderId: "119476746259",
  appId: "1:119476746259:web:6c99472cc394ff60c267e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);
export default app;