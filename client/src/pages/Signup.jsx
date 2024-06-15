import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        <div className="flex flex-col items-center justify-center mr-7 gap-2">
          <h1 className="text-3xl font-bold">
            <span className="text-3xl bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 rounded-lg p-1 text-white">
              Shreyansh's{" "}
            </span>
            Blog
          </h1>
          <p className="text-sm mt-5">
            This is a demo project. You can sign up with your email and password
            or with Google.
          </p>
        </div>
        <div>
          <form className="flex flex-col gap-4">
            <label for="username" className="font-semibold mb-0">
              Your username
            </label>
            <input
              id="userName"
              className="w-96 rounded-lg p-1 bg-slate-100 "
            ></input>
            <label for="email" className="font-semibold mb-0">
              email
            </label>
            <input
              id="email"
              placeholder="name@company.com"
              className="w-96 rounded-lg p-2 bg-slate-100 "
            ></input>
            <label for="password" className="font-semibold mb-0">
              password
            </label>
            <input
              id="password"
              className="w-96 rounded-lg p-1 bg-slate-100"
            ></input>
            <button className="text-white bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 p-2 rounded-lg">
              Sign Up{" "}
            </button>
            <button className="border-red-500 p-2 border-2 rounded-lg flex items-center justify-center">
              <AiFillGoogleCircle className="w-7 h-7 rounded-full" />
              Continue with google
            </button>
            <p>
              Have an account?{" "}
              <span className="text-blue-500">
                <Link>Sign in</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
