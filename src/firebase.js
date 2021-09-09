import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD0aO3gW6rQJ5Tu0Ig6JtjxOWdrO6pMGko",
    authDomain: "linkedin-4bbdd.firebaseapp.com",
    projectId: "linkedin-4bbdd",
    storageBucket: "linkedin-4bbdd.appspot.com",
    messagingSenderId: "593372519908",
    appId: "1:593372519908:web:5f6f2ce62f900f6c0c3bf1"
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth }