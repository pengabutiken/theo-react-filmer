// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTt3M9arruxdY4WZ7RBBRGPXPtDEQ2EFo",
  authDomain: "theo-film.firebaseapp.com",
  projectId: "theo-film",
  storageBucket: "theo-film.firebasestorage.app",
  messagingSenderId: "705874910559",
  appId: "1:705874910559:web:e91bc2d7fe2c0fed1e2aea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);