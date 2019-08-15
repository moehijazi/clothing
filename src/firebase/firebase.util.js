import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAZkd9MaZRIXmToOHkKiFBFQVL_ngOItTc",
    authDomain: "crwn-db-bba8f.firebaseapp.com",
    databaseURL: "https://crwn-db-bba8f.firebaseio.com",
    projectId: "crwn-db-bba8f",
    storageBucket: "",
    messagingSenderId: "491799570263",
    appId: "1:491799570263:web:66536a11a337b84c"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;