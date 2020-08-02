import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAb9YYXFLFY0JIx3oT8TQqN6uMNMJGb2u8",
  authDomain: "vtx-firegram.firebaseapp.com",
  databaseURL: "https://vtx-firegram.firebaseio.com",
  projectId: "vtx-firegram",
  storageBucket: "vtx-firegram.appspot.com",
  messagingSenderId: "535422989495",
  appId: "1:535422989495:web:82c403f5f4bafd0fdd0932",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
