// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { FirebaseStorage, getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRobRbJUCNIxJGOSw-d-kQe7GARbyJpsE",
  authDomain: "fir-test-581dd.firebaseapp.com",
  projectId: "fir-test-581dd",
  storageBucket: "fir-test-581dd.firebasestorage.app",
  messagingSenderId: "660118397974",
  appId: "1:660118397974:web:54b39973e0f5f7b4254137",
  measurementId: "G-BE7B8LZY59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth: Auth = getAuth(app);
const storage: FirebaseStorage = getStorage(app);

export { auth, storage };

