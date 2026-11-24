// Import the functions you need from the SDKs you need
import 'dotenv/config';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuVO7wEet9Ok7hGtFSMR3yS5kLCWqYTDQ",
  authDomain: "back-node-2026.firebaseapp.com",
  projectId: "back-node-2026",
  storageBucket: "back-node-2026.firebasestorage.app",
  messagingSenderId: "566617854691",
  appId: "1:566617854691:web:44f8acb2870315e9cc2bd6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };