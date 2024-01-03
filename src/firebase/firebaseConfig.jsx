// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVdym4Ny6LRVjhOhENlnJDbrfp4Dx_kIs",
  authDomain: "blog-9f7b3.firebaseapp.com",
  projectId: "blog-9f7b3",
  storageBucket: "blog-9f7b3.appspot.com",
  messagingSenderId: "937915328042",
  appId: "1:937915328042:web:2a59595ff7959f6198c553",
  measurementId: "G-0RF98XEGE5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export { fireDb, auth, storage };
