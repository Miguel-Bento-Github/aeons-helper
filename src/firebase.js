import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCck8xFHW4CGuek9Z4m8ZE0Z3ATereTXD4",
  authDomain: "board-game-tracker-bento.firebaseapp.com",
  projectId: "board-game-tracker-bento",
  storageBucket: "board-game-tracker-bento.appspot.com",
  messagingSenderId: "752185146572",
  appId: "1:752185146572:web:4135915d173043c0879669",
  measurementId: "G-D2BM5EHD6P",
};

export const firebaseApp = firebase.initializeApp(config);
export const db = firebaseApp.firestore();
export const usersCollection = db.collection("nemesis");
