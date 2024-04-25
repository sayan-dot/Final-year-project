// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjdbViJIPTuS6XV5YKSiwt78c26w82trI",
  authDomain: "voicepal02.firebaseapp.com",
  projectId: "voicepal02",
  storageBucket: "voicepal02.appspot.com",
  messagingSenderId: "158818095334",
  appId: "1:158818095334:web:4f8bdd1328183488906b27",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db=getFirestore(app)
export default app;
