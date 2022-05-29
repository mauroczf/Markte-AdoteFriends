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
  // apiKey: process.env.NEXT_FIREBASE_API_KEY,
  // authDomain: process.env.NEXT_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.NEXT_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.NEXT_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.NEXT_FIREBASE_APP_ID,
  // measurementId: process.env.NEXT_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth }

