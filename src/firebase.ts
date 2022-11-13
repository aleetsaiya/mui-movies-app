import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBFRrv8yPwRagsNz4DgG8-cTkvJHkB5XOU",
  authDomain: "mui-movies-app.firebaseapp.com",
  projectId: "mui-movies-app",
  storageBucket: "mui-movies-app.appspot.com",
  messagingSenderId: "53745097384",
  appId: "1:53745097384:web:b34ed2265fed23f0c0c09d",
  measurementId: "G-VLQMGSE2TJ",
  databaseURL:
    "https://mui-movies-app-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
