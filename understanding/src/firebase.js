
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCaPtuBYpssf3p0ZFeV40Cd5wOP4erIYTo",
   authDomain: "moody-ae579.firebaseapp.com",
  projectId: "moody-ae579",
  storageBucket: "moody-ae579.appspot.com",
  messagingSenderId: "200079976835",
  appId: "1:200079976835:web:00e891af073fb938162eb6",
  measurementId: "G-NGGKGW2HX1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
