import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBseaGBx4xvjsb0WkEG3AAplR49mWW_CVg",
    authDomain: "netflix-clone-9509a.firebaseapp.com",
    databaseURL: "https://netflix-clone-9509a.firebaseio.com",
    projectId: "netflix-clone-9509a",
    storageBucket: "netflix-clone-9509a.appspot.com",
    messagingSenderId: "892001785544",
    appId: "1:892001785544:web:2d6dd70db95d4d0c8337fd"
};

const firebase = Firebase.initializeApp(config);


export { firebase };
