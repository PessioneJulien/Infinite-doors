import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyD0tt4EGITC6vKmMN7Lx_Cslx6kpEcpjs0",
    authDomain: "infinite-doors.firebaseapp.com",
    projectId: "infinite-doors",
    storageBucket: "infinite-doors.appspot.com",
    messagingSenderId: "419474495547",
    appId: "1:419474495547:web:f1dd99f618d7c2da5ca41e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});
const db = getFirestore();
const storage = getStorage();
const serverTimestamp = () => firebase.firestore.FieldValue.serverTimestamp();

export { auth, db, storage, serverTimestamp };