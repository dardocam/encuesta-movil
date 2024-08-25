// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTQcBoB7jouVrFDS15ckSho3MhWbMzpmg",
  authDomain: "bamboo-clone-400516.firebaseapp.com",
  projectId: "bamboo-clone-400516",
  storageBucket: "bamboo-clone-400516.appspot.com",
  messagingSenderId: "412340887676",
  appId: "1:412340887676:web:bdba41cf8a5c8e158f29f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
