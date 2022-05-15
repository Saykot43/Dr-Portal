// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwW96U6Tsgzko2N3eJMGF65JcF9mHKyyw",
    authDomain: "doctors-portal-1599d.firebaseapp.com",
    databaseURL: "https://doctors-portal-1599d-default-rtdb.firebaseio.com",
    projectId: "doctors-portal-1599d",
    storageBucket: "doctors-portal-1599d.appspot.com",
    messagingSenderId: "91521874373",
    appId: "1:91521874373:web:2ed2826b92da8426d933ac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;