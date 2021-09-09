import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD0aO3gW6rQJ5Tu0Ig6JtjxOWdrO6pMGko",
    authDomain: "linkedin-4bbdd.firebaseapp.com",
    projectId: "linkedin-4bbdd",
    storageBucket: "linkedin-4bbdd.appspot.com",
    messagingSenderId: "593372519908",
    appId: "1:593372519908:web:5f6f2ce62f900f6c0c3bf1"
};

const firebaseApp = new FirebaseApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth }