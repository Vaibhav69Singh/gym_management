import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDt6byvC9usWyGutk9oW9fzOIlUvP6RXV0",
  authDomain: "gymwebsite-81563.firebaseapp.com",
  projectId: "gymwebsite-81563",
  storageBucket: "gymwebsite-81563.appspot.com",
  messagingSenderId: "487169470881",
  appId: "1:487169470881:web:b701c68500b50406949be0",
  measurementId: "G-RC6TBN06XH",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
