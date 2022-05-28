import {auth} from "../../config/firebase/connectingFirebase";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";


const providerGoogle = new GoogleAuthProvider();

const authGoogle = async() => {
 await signInWithPopup(auth, providerGoogle);
}

export {authGoogle};



