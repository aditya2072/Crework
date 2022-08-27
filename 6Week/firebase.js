
// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0yHaBe0U0yeRa8RT2cU_CgClVXtBD7fg",
  authDomain: "note-d09ec.firebaseapp.com",
  projectId: "note-d09ec",
  storageBucket: "note-d09ec.appspot.com",
  messagingSenderId: "893443088068",
  appId: "1:893443088068:web:77bf73af12e6fcb64ef391"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
