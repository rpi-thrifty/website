import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCsjA4joY2R0ekkxsIyaWsbZLOGAMbad3I",
    authDomain: "thrifty-9baea.firebaseapp.com",
    databaseURL: "https://thrifty-9baea-default-rtdb.firebaseio.com",
    projectId: "thrifty-9baea",
    storageBucket: "thrifty-9baea.appspot.com",
    messagingSenderId: "580527692180",
    appId: "1:580527692180:web:f2717c6445cc6d9cfa1781",
    measurementId: "G-GX0DZG40S6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getDatabase(app);