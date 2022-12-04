import firebase from 'firebase/compat/app';

import 'firebase/compat/analytics';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBvhNuRcy6Ufl6BFcj627tKbPSmNBZojaU",
    authDomain: "final-project-46a61.firebaseapp.com",
    projectId: "final-project-46a61",
    storageBucket: "final-project-46a61.appspot.com",
    messagingSenderId: "356299793406",
    appId: "1:356299793406:web:78c3b4a80ee680027596af"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
export default firebase;