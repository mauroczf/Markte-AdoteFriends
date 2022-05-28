import {auth} from "../../config/firebase/connectingFirebase";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";


const providerGoogle = new GoogleAuthProvider();

const authGoogle = async() => {
 await signInWithPopup(auth, providerGoogle).then(()=>{
        console.log("Fez o login com sucesso");
 }).catch(()=>{ console.log("Erro ao fazer o login")});
}

export {authGoogle};



