import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDFuWDQrxTQh69ObxQx6_BYhqciMWLpLKw",
  authDomain: "ty-story.firebaseapp.com",
  projectId: "ty-story",
  storageBucket: "ty-story.appspot.com",
  messagingSenderId: "280565088711",
  appId: "1:280565088711:web:36b3c9c3514d1751d6d9e2",
  measurementId: "G-DDCE569LQW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { auth, storage };
export default db;
