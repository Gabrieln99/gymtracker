import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAoLOfTQhTIsoYl0IghVzIV9zIRYPxg9-I",
  authDomain: "gymtracker-995c8.firebaseapp.com",
  projectId: "gymtracker-995c8",
  storageBucket: "gymtracker-995c8.appspot.com",
  messagingSenderId: "932203347247",
  appId: "1:932203347247:web:ab83a33168057e817975da",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { getFirestore, doc, setDoc, db };
