// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBz4tszMolSOkYM3fyKzEWUclGrGttHuEY",
  authDomain: "kevin-harrell.firebaseapp.com",
  databaseURL: "https://kevin-harrell.firebaseio.com",
  projectId: "kevin-harrell",
  storageBucket: "kevin-harrell.appspot.com",
  messagingSenderId: "114965867678",
  appId: "1:114965867678:web:457e5451066afbaa445f8f",
  measurementId: "G-628SGS9DE7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
