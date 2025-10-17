// import {
//
//   sendEmailVerification,
// } from "firebase/auth";
import { Eye, EyeOff, Key, User } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
// import auth from "../Firebase/firebase.config";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";

const LoginForm = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    if (!terms) {
      setError("Please Accept Our Terms and Conditions");
      return;
    }
    const hasLetter = /[A-Za-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[@$!%*#?&]/.test(password);
    const isLongEnough = password.length >= 8;
    if (!isLongEnough) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    if (!hasLetter) {
      setError("Password must contain at least one letter (A-Z or a-z).");
      return;
    }
    if (!hasNumber) {
      setError("Password must contain at least one number (0-9).");
      return;
    }
    if (!hasSpecial) {
      setError(
        "Password must include at least one special character (@$!%*#?&)."
      );
      return;
    }

    setError("");

    createUser(email, password)
      .then((result) => {
        setSuccess(true);
        e.target.reset();
      })
      .catch((error) => setError(error.message));
    setSuccess(false);
  };
  return (
    <div className=" flex items-center justify-center min-h-[calc(100vh-258px)]">
      <div className="card w-full max-w-xl shadow-xl ">
        <form onSubmit={handleRegister} className="card-body">
          <h2 className="text-xl font-semibold flex items-center gap-2 ">
            <User className="w-5 h-5 text-red-600" /> Create new account
          </h2>

          {/* Username */}
          <label className="input input-bordered flex items-center gap-2 mt-4 w-full">
            <User className="w-4 h-4 opacity-70" />
            <input
              type="email"
              name="email"
              className="grow"
              placeholder="Email"
              required
            />
          </label>

          {/* Password */}
          <div className="input input-bordered flex items-center gap-2 w-full">
            <Key className="w-4 h-4 opacity-70" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="flex-1"
              placeholder="Password"
              required
            />
            {showPassword ? (
              <Eye
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer"
              />
            ) : (
              <EyeOff
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer"
              />
            )}
          </div>

          {/* Register Button */}
          <button className="btn  mt-3">Register</button>

          <div>
            <label className="label">
              <input type="checkbox" name="terms" className="checkbox" />
              Accept Terms and Conditions
            </label>
          </div>

          <div className="text-center mt-2">
            <Link to="/login" className="text-sm text-red-400 hover:underline">
              Or login
            </Link>
          </div>
          {useEffect(() => {
            if (success) {
              Swal.fire({
                title: "Sign Up Successfull Go to login ",
                icon: "success",
                draggable: true,
              });
            }
          }, [success])}
          {error && <p className="text-error">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
