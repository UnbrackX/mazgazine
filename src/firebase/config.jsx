import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvA6SLA8cCkaJ2PBzxpmaVw6u8j0uvXX0",
  authDomain: "smallogin-dd8bc.firebaseapp.com",
  projectId: "smallogin-dd8bc",
  storageBucket: "smallogin-dd8bc.firebasestorage.app",
  messagingSenderId: "551611388716",
  appId: "1:551611388716:web:17b6f899def23b32ee5289",
  measurementId: "G-6RF51NG5DH",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
