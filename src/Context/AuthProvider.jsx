import React from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const info = {
    user: "tusharchow2021@gmail.com",
  };
  return (
    <div>
      <AuthContext value={info}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
