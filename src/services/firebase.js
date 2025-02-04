// src/services/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Firebase Auth
import { getAnalytics } from "firebase/analytics"; // Firebase Analytics

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCy4aQTLbsLtemwMqmP0zCLdCdHO2Q8gw",
  authDomain: "project-hostel-d8428.firebaseapp.com",
  projectId: "project-hostel-d8428",
  storageBucket: "project-hostel-d8428.firebasestorage.app",
  messagingSenderId: "226704699406",
  appId: "1:226704699406:web:f2ff30b7346298d0268c5f",
  measurementId: "G-0QB9QZQWT0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);  // Firebase Authentication instance
const analytics = getAnalytics(app);  // Firebase Analytics instance

export { auth, analytics }; // Export the auth object for use in components
