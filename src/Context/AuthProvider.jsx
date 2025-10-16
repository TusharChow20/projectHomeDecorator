import React from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const info = {
    createUser,
  };
  return (
    <div>
      <AuthContext value={info}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
