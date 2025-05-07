// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDuTAzTqM_OlIeeau1GgOsD0WasmltqO30",
    authDomain: "assignment-99-1330a.firebaseapp.com",
    projectId: "assignment-99-1330a",
    storageBucket: "assignment-99-1330a.firebasestorage.app",
    messagingSenderId: "1012610365297",
    appId: "1:1012610365297:web:641266583fdc8ce54128d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);