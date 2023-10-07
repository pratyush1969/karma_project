import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBq0_J-l1633b3eegASOw7gLgcUpOPsu38",
  authDomain: "signindetails-e1f16.firebaseapp.com",
  projectId: "signindetails-e1f16",
  storageBucket: "signindetails-e1f16.appspot.com",
  messagingSenderId: "682940488109",
  appId: "1:682940488109:web:d59403e39c7310a54a2924"
};


const app = initializeApp(firebaseConfig);
export const database=getAuth(app)