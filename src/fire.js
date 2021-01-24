import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBRsn8hjLEHKVwRtB8ILyFIFhXGe6hRA1w",
  authDomain: "rafflewebapp-cdb26.firebaseapp.com",
  projectId: "rafflewebapp-cdb26",
  storageBucket: "rafflewebapp-cdb26.appspot.com",
  messagingSenderId: "825390052259",
  appId: "1:825390052259:web:b0416e370c3dc99695a016",
  measurementId: "G-MQT3VH3B4N",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
