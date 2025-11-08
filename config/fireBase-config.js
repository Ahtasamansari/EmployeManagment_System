// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

//Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_DI6iyFmvmhdpnuWoGIUd_6rVtTjeS1g",
  authDomain: "employesystem-df4f8.firebaseapp.com",
  projectId: "employesystem-df4f8",
  storageBucket: "employesystem-df4f8.firebasestorage.app",
  messagingSenderId: "856277237217",
  appId: "1:856277237217:web:1aef3232282294901426a0",
  measurementId: "G-96LJSFCLN4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
export const db = getFirestore(app);