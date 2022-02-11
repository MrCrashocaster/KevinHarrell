// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtpWyRjPJpJl5wnVf9niJEOkBAHwbnhMA",
  authDomain: "template-f3229.firebaseapp.com",
  projectId: "template-f3229",
  storageBucket: "template-f3229.appspot.com",
  messagingSenderId: "58302981614",
  appId: "1:58302981614:web:815cb16d0d2a0435a1daff",
  measurementId: "G-VC7YB7F27P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
