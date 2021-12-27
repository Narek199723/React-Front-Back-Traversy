// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDxpo-RbFux_1CVcpHGlKxJcpeIyRxY8a4",
    authDomain: "house-market-place-app-6f901.firebaseapp.com",
    projectId: "house-market-place-app-6f901",
    storageBucket: "house-market-place-app-6f901.appspot.com",
    messagingSenderId: "10898039070",
    
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
