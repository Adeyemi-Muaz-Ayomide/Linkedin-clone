import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBWH14gL3V5IPKYJfTiCLEYqb2FiueddDk",
  authDomain: "linkedin-clone-2040a.firebaseapp.com",
  projectId: "linkedin-clone-2040a",
  storageBucket: "linkedin-clone-2040a.appspot.com",
  messagingSenderId: "22520646301",
  appId: "1:22520646301:web:07ce2b58ee34f14c482274",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export { app, auth, db };
