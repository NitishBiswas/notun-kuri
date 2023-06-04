import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyArBq7Gl3pkseS8vRZMz9L2zEAy5QZVKYY",
    authDomain: "asphyxia-e2f82.firebaseapp.com",
    projectId: "asphyxia-e2f82",
    storageBucket: "asphyxia-e2f82.appspot.com",
    messagingSenderId: "541630633907",
    appId: "1:541630633907:web:6b211352c155ba375e1dc6"
};

initializeApp(firebaseConfig);
export const db = getFirestore();
