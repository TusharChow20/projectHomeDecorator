import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";
import { DotLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = use(AuthContext);
  console.log(location.pathname);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-300px)]">
        <DotLoader color="#ff1ca6" size={198} />
      </div>
    );
  }
  if (user) {
    
    return children;
  }

  return <Navigate state={location?.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;
