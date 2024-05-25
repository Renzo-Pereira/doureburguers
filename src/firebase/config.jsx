import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDv7KetCpMZnGQxEW13V8a3G_cNsY3hyUo",
  authDomain: "doureburguers.firebaseapp.com",
  projectId: "doureburguers",
  storageBucket: "doureburguers.appspot.com",
  messagingSenderId: "140085857632",
  appId: "1:140085857632:web:56571b727a230b7b97e205"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);