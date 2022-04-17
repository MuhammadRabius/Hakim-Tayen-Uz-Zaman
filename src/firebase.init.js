// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIEAQL0Kb6no8BLlAm4qu44vC5-wmo694",
  authDomain: "hakim-tayen-uz-zaman.firebaseapp.com",
  projectId: "hakim-tayen-uz-zaman",
  storageBucket: "hakim-tayen-uz-zaman.appspot.com",
  messagingSenderId: "293223458301",
  appId: "1:293223458301:web:f32048d390f37b3a8da594"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);