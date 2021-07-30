import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// seed database

// config
const config = {
    apiKey: "AIzaSyCSzK98nddT2KIgWYGyKDMePNLAjGec6tQ",
    authDomain: "netflix-clone-ef31f.firebaseapp.com",
    projectId: "netflix-clone-ef31f",
    storageBucket: "netflix-clone-ef31f.appspot.com",
    messagingSenderId: "922336156948",
    appId: "1:922336156948:web:8385e8341cfb40188eb601"
};

const firebase = Firebase.initializeApp(config);

export { firebase };