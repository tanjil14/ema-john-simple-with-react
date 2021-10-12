import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();
  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
      console.log("Sign out Successfully");
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setUser(user);
      }
    });
  }, [auth]);
  return {
    user,
    signInUsingGoogle,
    logOut,
  };
};
export default useFirebase;
