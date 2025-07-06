// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9R2gdGuV987lpJ3tLWEqVpFu7c2gnNOs",
  authDomain: "katomine-95b44.firebaseapp.com",
  projectId: "katomine-95b44",
  storageBucket: "katomine-95b44.firebasestorage.app",
  messagingSenderId: "1072386418425",
  appId: "1:1072386418425:web:7f2ce6ff3ccce7b141e428",
  measurementId: "G-1G2682BWVV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);