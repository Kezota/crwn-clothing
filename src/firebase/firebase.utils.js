import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBqfCsPnX6tcZ5yvCzXqu6FNRmqzygGets",
  authDomain: "crwn-db-c305c.firebaseapp.com",
  databaseURL: "https://crwn-db-c305c.firebaseio.com",
  projectId: "crwn-db-c305c",
  storageBucket: "crwn-db-c305c.appspot.com",
  messagingSenderId: "1052579027770",
  appId: "1:1052579027770:web:ab45291c67802ad1aace03",
  measurementId: "G-QH3KSRLTFP"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;