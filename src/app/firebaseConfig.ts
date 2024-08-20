import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvPRoNCn3BqFLa_g-jyY-qwfZ_eO17TwI",
  authDomain: "project-5---f3-24-25d48.firebaseapp.com",
  databaseURL: "https://project-5---f3-24-25d48-default-rtdb.firebaseio.com",
  projectId: "project-5---f3-24-25d48",
  storageBucket: "project-5---f3-24-25d48.appspot.com",
  messagingSenderId: "788459754818",
  appId: "1:788459754818:web:2fe216300c8d0d420aa4db"
};

const app = initializeApp(firebaseConfig);
const dbFirebase = getDatabase(app);
const authFirebase = getAuth(app);

export { dbFirebase, authFirebase };