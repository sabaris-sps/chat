import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDc2I1BP0xxDwh-ps23KHOrlP1NfdmPrJY",
  authDomain: "sabaris-chat.firebaseapp.com",
  projectId: "sabaris-chat",
  storageBucket: "sabaris-chat.appspot.com",
  messagingSenderId: "215289590039",
  appId: "1:215289590039:web:5b16fbd11c61ff3daf4752",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
