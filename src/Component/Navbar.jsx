import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignout = () => {
    logOut()
      .then(() => {
        console.log();
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm md:px-13 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 md:w-52 p-2 shadow"
            >
              <li className="md:hidden ">
                <Link to={"/"} className="btn btn-ghost ">
                  HomeDecorator
                </Link>
              </li>
              <li>
                <NavLink to={"/"}>Homepage</NavLink>
              </li>
              <li>
                <NavLink to={"/products"}>Products</NavLink>
              </li>
              <li>
                <NavLink to={"/cart"}>Cart</NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard"}>Dashboard</NavLink>
              </li>
              {user && (
                <>
                  <li>
                    <NavLink to={"/orders"}>Orders</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/profile"}>Profile</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        <div className="hidden md:navbar-center">
          <Link to={"/"} className="btn btn-ghost md:text-[30px]">
            HomeDecorator
          </Link>
        </div>
        <div className="navbar-end">
          <button className="btn">
            {user ? (
              <a onClick={() => handleSignout()} className="btn">
                {" "}
                Sign Out
              </a>
            ) : (
              <NavLink to={"/login"}>Login</NavLink>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
