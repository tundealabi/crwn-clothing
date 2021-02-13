import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBhW-JiV-k6fWU0En8WX1m9R2oIM0actBs",
    authDomain: "crwn-db-f0484.firebaseapp.com",
    projectId: "crwn-db-f0484",
    storageBucket: "crwn-db-f0484.appspot.com",
    messagingSenderId: "421688910517",
    appId: "1:421688910517:web:e9c6732f3bd762b68114fc",
    measurementId: "G-4NS7KKVEHQ"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;