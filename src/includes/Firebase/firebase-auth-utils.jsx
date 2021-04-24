import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const debug = require('debug');

const firebaseConfig = {
  apiKey: 'AIzaSyDYIzXbn2hamea5vMH035UH5hhyFRk9DYI',
  authDomain: 'squash-me.firebaseapp.com',
  projectId: 'squash-me',
  storageBucket: 'squash-me.appspot.com',
  messagingSenderId: '895811396327',
  appId: '1:895811396327:web:a1e93e2d5f6b96cdf6b842',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select-account' });

export const createOrReadUserDoc = async (user) => {
  const userRecord = firestore.collection('/users').doc(user.uid);
  const doc = await userRecord.get();
  if (!doc.exists) {
    await userRecord.set({
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
    });
    debug('Document successfully written!');
    // return await userRecord.get();
    return userRecord.get();
  }
  return doc;
};

const signInWithGoogle = () =>
  auth
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      const { credential } = result;

      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = credential.accessToken;
      // The signed-in user info.
      // const { user } = result;
      // ...
      debug(token);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      // const errorMessage = error.message;
      // The email of the user's account used.
      // const { email } = error;
      // The firebase.auth.AuthCredential type that was used.
      // const { credential } = error;
      // ...
      debug(errorCode);
    });

export default signInWithGoogle;
