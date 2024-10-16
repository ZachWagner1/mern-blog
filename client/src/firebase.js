// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-dac43.firebaseapp.com",
  projectId: "mern-blog-dac43",
  storageBucket: "mern-blog-dac43.appspot.com",
  messagingSenderId: "653054457484",
  appId: "1:653054457484:web:a2cf2f67358aa537aa6da9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);