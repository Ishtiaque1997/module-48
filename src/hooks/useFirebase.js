import { useState } from "react";
import { getAuth, signInWithPopup,onAuthStateChanged, GoogleAuthProvider,signOut } from "firebase/auth";
import { useEffect } from "react";


const useFirebase=()=>{
  const[user,setUser]=useState({});
  const googleProvider=new GoogleAuthProvider();
  const auth=getAuth();

  const signInUsingGoogle=()=>{
   signInWithPopup(auth,googleProvider)
   .then(res=>{
    console.log(res.user);
   })
  }
  const logout=()=>{
   signOut(auth)
   .then(()=>{
      setUser({})
   })
  }
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
  if (user) {
    setUser(user);
  }
 });
},[])
return{
 user,
 signInUsingGoogle,
 logout
}


}
export default useFirebase;