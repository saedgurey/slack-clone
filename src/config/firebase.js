import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey:import.meta.env.VITE_APIKEY,
    authDomain: "slack-clone-3b5b8.firebaseapp.com",
    projectId: "slack-clone-3b5b8",
    storageBucket: "slack-clone-3b5b8.appspot.com",
    messagingSenderId: "552529507642",
    appId: import.meta.env.VITE_APP_ID
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider, db} 