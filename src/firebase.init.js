// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkzAkBEb8ttRd7_LQDNVXng32XDGmxJsE",
  authDomain: "email-password-a2dc2.firebaseapp.com",
  projectId: "email-password-a2dc2",
  storageBucket: "email-password-a2dc2.firebasestorage.app",
  messagingSenderId: "1073209701789",
  appId: "1:1073209701789:web:8f702654b226aa1d6d2b74",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
