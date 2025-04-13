import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlMF4_ixvmJ_NtzfDyWkVKsgz5EXkEPLw",
  authDomain: "helpaw-3f180.firebaseapp.com",
  projectId: "helpaw-3f180",
  appId: "1:484848608362:web:42dabc8f291dbadc2bd613",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup };
