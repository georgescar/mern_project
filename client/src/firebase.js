// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-project-369f4.firebaseapp.com",
  projectId: "mern-project-369f4",
  storageBucket: "mern-project-369f4.firebasestorage.app",
  messagingSenderId: "212903934351",
  appId: "1:212903934351:web:c3a2f99555375c4749b3fa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);