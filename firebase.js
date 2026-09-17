import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  sendEmailVerification, 
  signOut, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  query, 
  orderBy, 
  limit, 
  getDocs, 
  serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBT9RAtakpXzScqAWpYLqYLRGPweZWT4wI",
  authDomain: "ssc-master-live.firebaseapp.com",
  projectId: "ssc-master-live",
  storageBucket: "ssc-master-live.firebasestorage.app",
  messagingSenderId: "813628427067",
  appId: "1:813628427067:web:bafd1c935a9200af91851e",
  measurementId: "G-CZSG0KS2SX"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  sendEmailVerification, 
  signOut, 
  onAuthStateChanged,
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  query, 
  orderBy, 
  limit, 
  getDocs, 
  serverTimestamp 
};