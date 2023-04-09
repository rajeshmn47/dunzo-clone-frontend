import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEJ8rV-GsusYw_lN8hj-f2G4Sd3BmPUc0",
  authDomain: "dunzoclone-46691.firebaseapp.com",
  projectId: "dunzoclone-46691",
  storageBucket: "dunzoclone-46691.appspot.com",
  messagingSenderId: "499568479534",
  appId: "1:499568479534:web:5885e520678dcb5c83bebf",
  measurementId: "G-KWJM7ENB5Z",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export { auth, firebase };
