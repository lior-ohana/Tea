// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS1hkS8URWPIvEfYSH0CHSmU-Q5oBvvtA",
  authDomain: "final-project-app-606c2.firebaseapp.com",
  databaseURL:
    "https://final-project-app-606c2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "final-project-app-606c2",
  storageBucket: "final-project-app-606c2.appspot.com",
  messagingSenderId: "537350324339",
  appId: "1:537350324339:web:fca92ea099fdc6a80a2a06",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}
