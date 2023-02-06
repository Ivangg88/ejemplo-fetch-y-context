import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSv0qCB7Y61Crod8l-T54HZIYvlpnFcSo",
  authDomain: "proyecto-final-bootcamp-18e38.firebaseapp.com",
  databaseURL:
    "https://proyecto-final-bootcamp-18e38-default-rtdb.firebaseio.com/",
  projectId: "proyecto-final-bootcamp-18e38",
  storageBucket: "proyecto-final-bootcamp-18e38.appspot.com",
  messagingSenderId: "465882818232",
  appId: "1:465882818232:web:256dae5105ee1a4f13f64d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
