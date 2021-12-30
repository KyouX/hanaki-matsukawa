// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-gxB5DI8T5Qy3GoYrRMRVCo9gHdWgmNs",
  authDomain: "hanaki-53ab9.firebaseapp.com",
  projectId: "hanaki-53ab9",
  storageBucket: "hanaki-53ab9.appspot.com",
  messagingSenderId: "41556983168",
  appId: "1:41556983168:web:3fa14a237ba8a072f75565"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app; 
}