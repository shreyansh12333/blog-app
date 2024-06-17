import React, { useState } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Spinner } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../store/slices/userslice";

export default function Signin() {
  const [formData, setFormData] = useState({});
  const { error, loading } = useSelector((state) => state.userSlice);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const newFormData = { ...formData, [e.target.id]: e.target.value };
    setFormData(newFormData);
  };
  const handleSubmit = async (e) => {
    console.log("hello");
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);

      if (data.success === false) {
        dispatch(signInFailure(data));
        return;
      }
      dispatch(signInSuccess(data));

      navigate("/");
    } catch (error) {
      signInFailure(dispatch(error));
      return;
    }
  };
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        <div className="flex flex-col items-center justify-center mr-7 gap-2">
          <h1 className="text-3xl font-bold">
            <span className="text-3xl bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 rounded-lg p-2 text-white">
              Shreyansh's{" "}
            </span>
            Blog
          </h1>
          <p className="text-sm mt-5">
            This is a demo project. You can sign up with your email and password
            or with Google.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <label for="email" className="font-semibold mb-0">
              email
            </label>
            <input
              id="email"
              type="email"
              placeholder="name@company.com"
              className="w-96 rounded-lg p-2 bg-slate-100 "
              onChange={handleChange}
            ></input>
            <label for="password" className="font-semibold mb-0">
              password
            </label>
            <input
              id="password"
              type="password"
              className="w-96 rounded-lg p-2 bg-slate-100"
              onChange={handleChange}
            ></input>
            <button
              className="text-white bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 p-3 rounded-lg w-96"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "SignUp"
              )}
            </button>
            <button className="border-red-500 p-2 border-2 rounded-lg flex items-center justify-center w-96">
              <AiFillGoogleCircle className="w-7 h-7 rounded-full" />
              Continue with google
            </button>
            <p>
              Have an account?{" "}
              <span className="text-blue-500">
                <Link>Sign in</Link>
              </span>
            </p>
            {error && (
              <Alert className="mt-5" color="failure">
                {error}
              </Alert>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
