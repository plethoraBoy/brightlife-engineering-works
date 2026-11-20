import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUo8J175_7RmdDcLaoqNKxmzL7ruH5WZM",
  authDomain: "wraptech-8d87a.firebaseapp.com",
  projectId: "wraptech-8d87a",
  storageBucket: "wraptech-8d87a.firebasestorage.app",
  messagingSenderId: "175879559326",
  appId: "1:175879559326:web:bc8c08303b28b99fec038f",
  measurementId: "G-SDS167K8E0",
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

export const db = getFirestore(app);
