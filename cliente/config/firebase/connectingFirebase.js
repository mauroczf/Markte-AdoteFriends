import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpnnpZntWIpytD2jTvANcFEkOEGXSepQw",
  authDomain: "adotefilhote-ffed7.firebaseapp.com",
  projectId: "adotefilhote-ffed7",
  storageBucket: "adotefilhote-ffed7.appspot.com",
  messagingSenderId: "722051562728",
  appId: "1:722051562728:web:f067fc2a68741ccaebdd5d",
  measurementId: "G-4HM0NS95FG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth}