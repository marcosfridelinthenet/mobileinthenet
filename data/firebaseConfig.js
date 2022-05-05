// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2i1GrgPURvrCtRgUpAr-H11dT2bL0H4E",
  authDomain: "track-inthenet.firebaseapp.com",
  databaseURL: "https://track-inthenet-default-rtdb.firebaseio.com",
  projectId: "track-inthenet",
  storageBucket: "track-inthenet.appspot.com",
  messagingSenderId: "679782424874",
  appId: "1:679782424874:web:87870bfe6edbfac9febe53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;

