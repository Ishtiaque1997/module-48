
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication=()=>{
initializeApp(firebaseConfig);
}
export default initializeAuthentication;


// steps for authentication

// Initial setup
// 1. Firebase: create project
// 2. create web app
//3. get configuration
//4. Initialize firebase
//5. Enable auth method
//6.