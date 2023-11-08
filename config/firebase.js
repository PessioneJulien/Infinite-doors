import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBvNjS1XjJJ58bwHM5n1L-6RtOYftMO7B0",
    authDomain: "artini-developpement.firebaseapp.com",
    projectId: "artini-developpement",
    storageBucket: "artini-developpement.appspot.com",
    messagingSenderId: "439919878996",
    appId: "1:439919878996:web:1d6ed31cb4e842c49c5ec1"
};

// Initialisez Firebase
initializeApp(firebaseConfig);

// Accédez aux services Firebase dont vous avez besoin
const auth = getAuth()
const db = getFirestore();
const storage = getStorage();
const serverTimestamp = () => firebase.firestore.FieldValue.serverTimestamp();

export { auth, db, storage, serverTimestamp };
