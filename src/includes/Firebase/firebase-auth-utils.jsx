import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDYIzXbn2hamea5vMH035UH5hhyFRk9DYI",
    authDomain: "squash-me.firebaseapp.com",
    projectId: "squash-me",
    storageBucket: "squash-me.appspot.com",
    messagingSenderId: "895811396327",
    appId: "1:895811396327:web:a1e93e2d5f6b96cdf6b842"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  //provider.setCustomParameters({ prompt: 'select-account' });

  export const createOrReadUserDoc = async (user) => {
        var userRecord = firestore.collection('/users').doc(user.uid);
        let doc = await userRecord.get()
        if (!doc.exists) {
          await userRecord.set({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL
          })
          console.log("Document successfully written!");
          return await userRecord.get();
        }
        else {
          return doc;
        }
  }

  export const signInWithGoogle = () => auth.signInWithPopup(provider).then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
    console.log(token);
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
    console.log(errorCode);
  });

  export default signInWithGoogle;