import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAjqmOjx5KuJWtKiE-AMkI07ox9RdTP98U",
    authDomain: "obbers-f188e.firebaseapp.com",
    databaseURL: "https://obbers-f188e.firebaseio.com",
    projectId: "obbers-f188e",
    storageBucket: "",
    messagingSenderId: "184653581873",
    appId: "1:184653581873:web:1896c0bf6944bec7",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
