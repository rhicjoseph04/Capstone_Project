import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB0bkKGqwF5O7kVzBRsye-a8yokleRMe1s",
  authDomain: "eliteride-helmets-and-gear.firebaseapp.com",
  projectId: "eliteride-helmets-and-gear",
  storageBucket: "eliteride-helmets-and-gear.appspot.com",
  messagingSenderId: "588989816066",
  appId: "1:588989816066:web:944bf71896970a32ce761b"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth  = getAuth(app)

export { fireDB, auth };