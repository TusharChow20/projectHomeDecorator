import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signinUser = (email, password) => {
    // setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  // onAuthStateChanged(auth, (currentUser) => {
  //   if (currentUser) {
  //     console.log("if", currentUser);
  //   } else {
  //     console.log("else", currentUser);
  //   }
  // });

  useEffect(() => {
    //mount / set the observer
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log("current", currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe(); //unmount
    };
  }, []);
  const info = {
    createUser,
    signinUser,
    user,
    loading,
    logOut,
  };
  return (
    <div>
      <AuthContext value={info}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
