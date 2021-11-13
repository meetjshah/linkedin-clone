import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDFu5sx1-RNBPr5esacNhz5_1MsBiSSWow",
    authDomain: "linkedin-clone-5ed1d.firebaseapp.com",
    projectId: "linkedin-clone-5ed1d",
    storageBucket: "linkedin-clone-5ed1d.appspot.com",
    messagingSenderId: "700375529698",
    appId: "1:700375529698:web:08cb74ca01b59b9c5986bb",
    measurementId: "G-YKGVYYF116"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };