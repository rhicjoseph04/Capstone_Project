import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBHzdX6y66Jat6YtC0byIuFoRpitgpLAUA",
  authDomain: "myfirstapp-a0c8d.firebaseapp.com",
  projectId: "myfirstapp-a0c8d",
  storageBucket: "myfirstapp-a0c8d.appspot.com",
  messagingSenderId: "744064884100",
  appId: "1:744064884100:web:8f8636ba62c4fda15a91d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth  = getAuth(app)

export { fireDB, auth };