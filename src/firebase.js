import "firebase/analytics";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCRXr0nkWZ3ZVYN2L0tY6xq3dYiYV0v_ag",
  authDomain: "board-game-control.firebaseapp.com",
  projectId: "board-game-control",
  storageBucket: "board-game-control.appspot.com",
  messagingSenderId: "948139141585",
  appId: "1:948139141585:web:c59a708bf0c1529c7018f0",
  measurementId: "G-DJSVVRM3M4",
};

export const firebaseApp = firebase.initializeApp(config);
export const db = firebaseApp.firestore();
export const FieldValue = firebase.firestore.FieldValue;

export const playerCollection = db.collection("players");
export const nemesisCollection = db.collection("nemesis");
export const charactersCollection = db.collection("characters");
export const graveholdCollection = db.collection("gravehold");
