import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Lottie from "lottie-react";
import errorAnimation from "../Assets/file1.json";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Lottie animationData={errorAnimation} loop={true} />
        </div>
        <h1 className="text-3xl font-bold text-center mt-6 text-gray-700">
          Oops! Page Not Found
        </h1>
        <p className="text-gray-500 text-center mt-2 mb-6">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="bg-indigo-500 text-white px-5 py-2 rounded-xl hover:bg-indigo-600 transition"
        >
          Go Back Home
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default Error;
