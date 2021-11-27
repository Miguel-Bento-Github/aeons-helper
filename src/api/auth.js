import firebase from "firebase";

export const auth = async () => {
  const currentUser = await firebase.auth().currentUser;

  firebase.auth().onAuthStateChanged((user) => {
    if (user || currentUser) {
      console.log("logged in to google");
    } else {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    }
  });
};
