import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA0ane5vgUnEKG_FgTY9HnqhUj-bRbuE-Q",
  authDomain: "bewerbungsapp-3ba0f.firebaseapp.com",
  projectId: "bewerbungsapp-3ba0f",
  storageBucket: "bewerbungsapp-3ba0f.appspot.com",
  messagingSenderId: "800834712013",
  appId: "1:800834712013:web:69b80d71e59f626eb29484",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });

export default db;
