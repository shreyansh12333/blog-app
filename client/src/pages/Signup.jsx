import React, { useState } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Alert, Spinner } from "flowbite-react";
import OAuth from "../Components/OAuth";

export default function Signup() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const newData = { ...formData, [e.target.id]: e.target.value };

    setFormData(newData);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.userName || !formData.email || !formData.password) {
      console.log("hello");
      setErrorMessage("All fields are required");
      return;
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        setErrorMessage(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
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
            <label for="username" className="font-semibold mb-0">
              Your username
            </label>
            <input
              id="userName"
              type="text"
              className="w-96 rounded-lg p-2 bg-slate-100 "
              onChange={handleChange}
            ></input>
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
            <OAuth />

            <p>
              Have an account?{" "}
              <span className="text-blue-500">
                <Link>Sign in</Link>
              </span>
            </p>
            {errorMessage && (
              <Alert className="mt-5" color="failure">
                {errorMessage}
              </Alert>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
