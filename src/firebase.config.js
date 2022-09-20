import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA7F04a3SAWz-HvGfx5J5vqJuoI4xjH7m0",
  authDomain: "restaurant-1eb61.firebaseapp.com",
  databaseURL: "https://restaurant-1eb61-default-rtdb.firebaseio.com",
  projectId: "restaurant-1eb61",
  storageBucket: "restaurant-1eb61.appspot.com",
  messagingSenderId: "720395270786",
  appId: "1:720395270786:web:949ce329057d84b730129b",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
