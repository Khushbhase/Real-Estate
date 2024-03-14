// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-abc67.firebaseapp.com",
  projectId: "real-estate-abc67",
  storageBucket: "real-estate-abc67.appspot.com",
  messagingSenderId: "899670018741",
  appId: "1:899670018741:web:60578d2b974b2f78fd8cfc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);